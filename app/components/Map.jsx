import React from 'react';
import scriptLoader from 'react-async-script-loader';
import { connect } from 'react-redux';
import { reverseGeoCode, saveCity, removeCity, parseCityObject } from '../helpers/app';
import Promise from 'promise';

const key = process.env.GOOGLE_KEY;

class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    const { isScriptLoaded, isScriptLoadSucceed } = this.props;

    if (isScriptLoaded && isScriptLoadSucceed && !prevProps.isScriptLoaded && !prevProps.isScriptLoadSucceed) {
      this.loadMap();
    }

    if (JSON.stringify(prevProps.markers) !== JSON.stringify(this.props.markers)) {
      this.getDirections(this.props.markers);
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

    _this.directionsService = new google.maps.DirectionsService();
    _this.directionsDisplay = new google.maps.DirectionsRenderer();

    _this.map.addListener('click', (event) => { _this.addCity(event.latLng); });
    _this.directionsDisplay.setMap(_this.map);

    if (hasMarkers) { _this.initMarkers(markers); }
  }

  addCity(coordinates) {
    const _this = this;

    reverseGeoCode(coordinates).then((data) => {
      let city = parseCityObject(data);
      let markers = [..._this.props.markers, city];

      _this.getDirections(markers).then ((data) => {
        let trip_directions = data;
        let last_leg = trip_directions[trip_directions.length - 1];

        city.directions = {
          distance: last_leg.distance.text,
          duration: last_leg.duration.text
        };

        let marker = _this.createMarker(city, null);

        google.maps.event.addListener(_this.infowindow,'closeclick', function() {
          _this.removeMarker(marker);
        });
        _this.showInfoWindow(marker, city);
      });
    });
  }

  saveCityCallback(markerInfo) {
    const _this = this;
    _this.infowindow.close();
    _this.createMarker.bind(markerInfo, 9);
  }

  getDirections(markers) {
    const _this = this;
    let waypoints = null;

    if (markers.length > 2) {
      waypoints = markers.map((marker) => {
        return {
          'location': marker.coordinates,
          'stopover': false
        };
      });
    }

    let request = {
      origin: markers[0].coordinates,
      waypoints: waypoints,
      destination: markers[markers.length - 1].coordinates,
      travelMode: google.maps.TravelMode.DRIVING
    };

    return new Promise((resolve, reject) => {
      _this.directionsService.route(request, function(response, status) {

        if (status == google.maps.DirectionsStatus.OK) {
          _this.directionsDisplay.setDirections(response);
          _this.directionsDisplay.setOptions({ suppressMarkers: true });
          resolve(response.routes[0].legs);
        } else {
          console.error(status);
          reject();
        }
      });
    });
  }

  // MARKERS
  initMarkers(markers) {
    const _this = this;

    markers.map((marker, i) => {
      _this.createMarker(marker, i);

      if (markers.length > 1) {
        _this.getDirections(markers);
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

  removeMarker(marker) { marker.setMap(null); }

  // INFOWINDOW
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
        saveCity(markerInfo,  _this.saveCityCallback.bind(_this, markerInfo));
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
