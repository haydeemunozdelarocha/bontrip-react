import React from 'react';
// import ReactDOM from 'react-dom';
// import scriptLoader from 'react-async-script-loader';
import { connect } from 'react-redux';
import Map from './Map';
import * as actions from '../actions/actions';

// const key = process.env.GOOGLE_KEY;

class CitiesMap extends React.Component {
  constructor(props) {
    console.log('state in cities map');
    super(props);
    this.state = {
      loaded:false,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      start: this.props.location
    };
  }

  removeCity(city) {
    const { dispatch } = this.props;
    confirm('Remove city from trip?');
    dispatch(actions.removeCity(null,city));
  }

  render() {
    const cities = this.props.state.trip.selectedTrip.cities;

    return (
      <Map markers={cities} clickMarkerCallback={this.removeCity}/>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    state: state
  };
};

// var CitiesMap = scriptLoader(["https://maps.googleapis.com/maps/api/js?key="+key+"&libraries=places"]
// )(CitiesMap);

export default connect(mapStateToProps)(CitiesMap);
