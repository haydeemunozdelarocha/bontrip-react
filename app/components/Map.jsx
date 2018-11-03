import React from 'react';
import scriptLoader from 'react-async-script-loader';
import { connect } from 'react-redux';
import { reverseGeoCode, saveCity, removeCity, parseCityObject } from '../helpers/app';
import Promise from 'promise';

const key = process.env.GOOGLE_KEY;

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded:false,
      showingInfoWindow: false,
      activeMarker: {},
    };
  }

  componentDidUpdate(prevProps) {
    const { isScriptLoaded, isScriptLoadSucceed } = this.props;

    if (isScriptLoaded && isScriptLoadSucceed && !prevProps.isScriptLoaded && !prevProps.isScriptLoadSucceed) {
      this.loadMap();
    }
  }

  loadMap() {
    const _this = this;
    const { markers } = _this.props;
    const hasMarkers = markers.length > 0;
    const defaultCoordinates = {
      lat: 48.8566,
      lng: 2.3522
    };
    const setMapCenter = hasMarkers ? markers[0].coordinates : defaultCoordinates;
    const setZoomValue = hasMarkers ? 8 : 5;
    const mapContainer = document.getElementById('map');

    _this.map = new google.maps.Map(mapContainer, {
      zoom: setZoomValue,
      center: setMapCenter
    });

    _this.directionsService = new google.maps.DirectionsService;

    _this.map.addListener('click', (event) => { _this.getCity(event.latLng); });

    if (hasMarkers) { _this.initMarkers(markers); }
  }

  getCity(coordinates) {
    const _this = this;
    const { markers } = _this.props;

    reverseGeoCode(coordinates).then((data) => {
      let city = parseCityObject(data);
      let marker = _this.createMarker(city);
      let last_marker = markers[markers.length - 1];
      let start = last_marker.coordinates;
      let destination = city.coordinates;

      _this.calcRoute(start, destination).then ((data) => {
        city.directions = data;

        //TODO: write function to clean up event listeners
        google.maps.event.addListener(_this.infowindow,'closeclick', function() {
          _this.removeMarker(marker);
        });
        _this.showInfoWindow(marker, city);
      });
    });
  }

  removeMarker(marker) {
    // TODO: fix directions display to only remove city that was deleted
    const _this = this;
    marker.setMap(null);
    _this.directionsDisplay.setMap(null);
  }

  calcRoute(city1, city2) {
    const _this = this;
    let request = {
      origin: city1,
      destination: city2,
      travelMode: google.maps.TravelMode.DRIVING
    };
    return new Promise((resolve, reject) => {
      _this.directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
          _this.directionsDisplay = new google.maps.DirectionsRenderer();
          _this.directionsDisplay.setMap(_this.map);

          _this.directionsDisplay.setDirections(response);
          _this.directionsDisplay.setOptions( { suppressMarkers: true } );
          let directions = {
            distance: response.routes[0].legs[0].distance.text,
            duration: response.routes[0].legs[0].duration.text
          };
          resolve(directions);
        } else {
          alert('Directions Request from ' + start.toUrlValue(6) + ' to ' + end.toUrlValue(6) + ' failed: ' + status);
          reject();
        }
      });
    });
  }

  initMarkers(markers) {
    const _this = this;

    markers.map((marker, i) => {
      let point = marker.coordinates;
      _this.createMarker(marker, i);

      if (markers.length > 1 && i !== markers.length - 1) {
        let start = point;
        let destination = markers[i + 1].coordinates;
        _this.calcRoute(start, destination);
      }
    });
  }

  createMarker(marker, id) {
    const _this = this;

    let mapMarker = new google.maps.Marker({
      position: marker.coordinates,
      title: marker.name,
      visible: true,
      map: _this.map,
      id: id
    });

    _this.initInfoWindow();
    mapMarker.addListener('click', () => _this.showInfoWindow(mapMarker, marker));

    return mapMarker;
  }

  initInfoWindow() {
    const _this = this;

    _this.infowindow = new google.maps.InfoWindow({
      content: ''
    });
  }

  createInfoWindowContent(cityInfo) {
    const _this = this;
    const { markers } = _this.props;
    const name = cityInfo.country === 'United States' ? `${cityInfo.name}, ${cityInfo.state}` : `${cityInfo.name}, ${cityInfo.country}`;
    const distance = 'directions' in cityInfo ? 'Distance: ' + cityInfo.directions.distance : 'First Stop';
    const duration = 'directions' in cityInfo ? 'Duration: ' + cityInfo.directions.duration : '';
    const is_saved_city = markers.find(marker => marker.name === cityInfo.name);
    let button_label = is_saved_city ? 'Remove' : 'Add to Trip';
    let button_handle = is_saved_city ? 'data-info-window-button-action="remove-city"' : 'data-info-window-button-action="save-city"';

    return `
        <div class="infowindow-header">
          <p class="infowindow-title">${name}</p>
        </div>
        <div class="infowindow-content">
          <p class="infowindow-text">${duration}</p>
          <p class="infowindow-text">${distance}</p>
        </div>
        <div class="infowindow-footer">
          <button class="button small-button" data-info-window-button ${button_handle}>${button_label}</button>
        </div>`;
  }

  showInfoWindow(mapMarker, markerInfo) {
    const _this = this;
    _this.infowindow.setContent(this.createInfoWindowContent(markerInfo));
    _this.infowindow.open(_this.map, mapMarker);
    google.maps.event.addListener(_this.infowindow,'domready',_this.initInfoWindowClickHandlers.bind(_this, markerInfo, mapMarker));
  }

  initInfoWindowClickHandlers(markerInfo, mapMarker) {
    const _this = this;
    const infoWindowButton = document.querySelector('[data-info-window-button]');

    infoWindowButton.addEventListener('click', function() {
      let infoWindowButtonAction = this.dataset.infoWindowButtonAction;
      if (infoWindowButtonAction === 'save-city') {
        saveCity(markerInfo, _this.infowindow.close.bind(_this.infowindow));
      } else if (infoWindowButtonAction === 'remove-city') {
        removeCity(markerInfo, _this.removeMarker.bind(_this, mapMarker));
      }
    });
  }

  render() {
    return (
      <div className="l-full-page-wrapper map-wrapper">
        <div className="map-header">
          <button className="button small-button map-buttons-right" onClick={this.saveTrip}>Save Trip</button>
        </div>
        <div className="map" id="map">
          <i className="centered-loading-icon fa fa-spinner fa-spin" ref="spinner" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    state: state
  };};

const WrappedMap = scriptLoader([`https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places`])(Map);

export default connect(mapStateToProps)(WrappedMap);
