var React = require('react');
var ReactDOM = require('react-dom');
var Navigation = require('Navigation');
var GetPlaces = require('GetPlaces');
var WindowContent = require('./WindowContent');

var $= require('jquery');

import {Map, InfoWindow,Listing, Marker, GoogleApiWrapper} from 'google-maps-react';

const style = {
  width: '100%',
  height: '90%'
}

const containerStyle = {
  width: '69%',
  height: '100%',
  zIndex:-30
}

const stylewindow = {
  zIndex:90
}


Map.propTypes = {
  google: React.PropTypes.object,
  zoom: React.PropTypes.number,
    centerAroundCurrentLocation: React.PropTypes.bool
}

var Mapa = React.createClass({
    getInitialState: function (){
    // this.handleClick = this.handleClick.bind(this);

    return {loaded:false,
      places:[],
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      location: {
        lat: 40.854885,
        lng: -88.081807
      }
    };
  },
  componentDidMount:function(){
    console.log('yes',this.refs);

     // ReactDOM.findDOMNode(this.refs.yes).addEventListener('nv-focus', this.handleSchedule);
  },
    onMarkerClick: function(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  },
  fetchPlaces: function(mapProps,map) {

    var that = this;
    // const {google} = mapProps;
    // const service = new google.maps.places.PlacesService(map);
    var user= {
          _id: {
              $oid: "57aa78b2caf5ca16154f457c"
          },
          salt: "acc3840aafc6b2bb25725aa57b676d47107ed931798b3c84b2fb9d34608c9c6b",
          hash: "5efd884a4ce6528953cdc0dc41092fb86c5af262ad682e409566cbc519b9acd92191008b6f6cccf87ac40e0f6f06f7b69665046b0281c7177dc0e081bd9a34a3e495199c49981d52d03c600445c84c8a99d5e5a7726724f9d05416cc7a9d15921e04d232b14089ade2dc6e7e68bca5f92b420964c2e35adde062aca18d14209731f772185ccc857a9aaf5e62b578e19b8d84bde7426fd2c08ee2e862240d5079c9194d0e5165cb9eafc39f5b9bb87f756f55fb2f61f74c1433bc2386567b7875dd370f673ecedc8e785f5092a62274cc6ad19cc62d07eaf70738f210075b117087c057df6d490c4b5cf65e18e49b6ce96a7fd15556c2c66fa0a198456a8fb4eb4a45f6aee3e520fbd3bb362cdcc6ab7165a496a3343d77db8e8d12b62461c5359fcc5333477a1647420347d2ce76b39b64a84e82d8aedb4ad2afdd411a54086b4dc6676cc2ecbcce34cc082ac2adae431ada69c24752f341963c6cf546a8662b055ebdd0c80638369371b51b87509c73598a5d25e6dc4756e4d8114ce65a26d3ede59c45b2f062ecb0f07696d524b2294907386512fdccac476d13a5dd602157f289b111156431603ead22be3ca6fe9e696c925b9af00fdea2615a14414e131751eab1a7c92a5899e84bcc781ae88c14102f9c337bad79f10ebe7157f03d78332c452425e8b72d13ebd0eda0c65a5038df195b0b4c83daf4f6f943571cae631f",
          username: "hi@you.com",
          __v: 0,
          tripId: "57bf7be55f67aef8082e7d91"

      };

        GetPlaces.getLikedPlaces(user._id.$oid,user.tripId).then(function(res){
           that.setState({
            loaded:true,
            places:res.data,
            location:{lat:res.data[0].coordinates.lat,
              lng:res.data[0].coordinates.lon}
          });
        // that.loadMap(res.data[0].coordinates.lat,res.data[0].coordinates.lon);
      },function(errorMessage){
          this.setState({
            loaded:true,
            places:[]
          })
          return   alert(errorMessage);
        })
  },
   handleSchedule: function (e){
    console.log('clicking');
    var id = this.props.place_id;
    console.log(id);
    // this.props.schedulePlace(id);
  },
  render: function() {

    return (
      <Map ref="map" google={this.props.google}
        onReady={this.fetchPlaces}
        visible={this.state.loaded}
        center={this.state.location} zoom={11} containerStyle={containerStyle} style={style}>
        {this.state.places.map((place, i) =>{
          var coordinates = {lat:place.coordinates.lat,lng:place.coordinates.lon};
              return(
              <Marker onClick={this.onMarkerClick} key={place._id} name={place.name} photo={place.image} position={coordinates}></Marker>
              )
            })}
          <InfoWindow  marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow} >
          <WindowContent image={this.state.selectedPlace.id} image={this.state.selectedPlace.photo} name={this.state.selectedPlace.name}/>
        </InfoWindow>
      </Map>
    )
  }

});



module.exports = Mapa;
