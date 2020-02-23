import React from 'react';
import { connect } from 'react-redux';
import {
  saveCity,
  getCitySuggestionsByCoordinates
} from '../helpers/app';
import ReactMapboxGl, { MapContext, ZoomControl, Feature, Layer,Marker } from "react-mapbox-gl";
import SVG from 'react-inlinesvg';

const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoiaGF5ZGVlbXVub3oiLCJhIjoiY2pjbDhlaHFmMDR2ejMycXE0cng1dTR3bCJ9.0TAB6eibuUih8GaLPvaIpA',
});

class MapWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentZoom: 11
    }
  }

  setMarker(map, event) {
    const {lng, lat} = event.lngLat;
    getCitySuggestionsByCoordinates(lng, lat).then((city) => saveCity(city, null));
  }

  renderMarker(markerInfo, key) {
    const dimensions = this.state.currentZoom ? this.state.currentZoom * 5.5 < 50 ? this.state.currentZoom * 5.5 : 50 : 30;
    console.log('width', dimensions , this.state.currentZoom)
    return (
      <Marker
        coordinates={markerInfo.coordinates}
        key={key}
        anchor={'center'}
        offset={[(dimensions / 2), -(dimensions * 1.1)]}>
        <div style={{height: `${dimensions}px`, width: `${dimensions}px`}}>
          <SVG id="map-marker" src="/images/marker.svg" preProcessor={code => code.replace(/fill=".*?"/g, `fill="${markerInfo.color}"`)}/>
        </div>
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
        onZoomEnd={el => {
          this.setState({currentZoom: el.getZoom()});
          console.log('zoom', this.state.currentZoom);
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
