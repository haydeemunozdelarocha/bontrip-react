import React from 'react';
import { connect } from 'react-redux';
import {
  saveCity,
  getCitySuggestionsByCoordinates
} from '../helpers/app';
import ReactMapboxGl, { Layer, Marker } from "react-mapbox-gl";
import SVG from 'react-inlinesvg';

const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoiaGF5ZGVlbXVub3oiLCJhIjoiY2pjbDhlaHFmMDR2ejMycXE0cng1dTR3bCJ9.0TAB6eibuUih8GaLPvaIpA'
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
        anchor="center">
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
      </Map>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    state: state
  };};

export default connect(mapStateToProps)(MapWrapper);
