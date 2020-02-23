import React from 'react';
import { connect } from 'react-redux';
import {
  saveCity,
  getCitySuggestionsByCoordinates
} from '../helpers/app';
import ReactMapboxGl, { ZoomControl, Marker } from "react-mapbox-gl";
import SVG from 'react-inlinesvg';

const Map = ReactMapboxGl({
  accessToken: process.env.BONTRIP_MAP_KEY,
});

class MapWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  setMarker(map, event) {
    const {lng, lat} = event.lngLat;
    getCitySuggestionsByCoordinates(lng, lat).then((city) => saveCity(city, null));
  }

  renderMarker(markerInfo, key) {
    return (
      <Marker
        coordinates={markerInfo.coordinates}
        key={key}
        anchor={'bottom'}
        offset={[0, 0]}>
        <SVG id="map-marker" src="/images/marker.svg" preProcessor={code => code.replace(/fill=".*?"/g, `fill="${markerInfo.color}"`)}/>
      </Marker>
    );
  }

  render() {
    console.log('location', this.props);
    return (
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "100vh",
          width: "100vw"
        }}
        onClick={this.setMarker}
        center={this.props.location}>
        {this.props.markers.map((markerInfo, i) => this.renderMarker(markerInfo, i))}
        <ZoomControl position={'bottom-right'}/>
      </Map>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    state: state
  };};

export default connect(mapStateToProps)(MapWrapper);
