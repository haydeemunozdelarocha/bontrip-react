var React= require('react');
var ReactDOM= require('react-dom');
var GetPlaces= require('GetPlaces');
import scriptLoader from 'react-async-script-loader';
import 'Sass';


var key=process.env.GOOGLE_KEY;


export var MapaContainer = React.createClass({
    getInitialState: function (){

    return {
      loaded:false,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  },
  componentDidUpdate:function(prevProps, prevState) {

    if(prevProps.loaded !== this.props.loaded || prevProps.places.length !== this.props.places.length){
      this.loadMap();
    }
  },

  loadMap: function(){
    var that = this;
    var latitude = that.props.location.lat;
    var longitude = that.props.location.lng ;

      var map = new google.maps.Map(that.refs.map, {
          zoom: 12,
          center: {lat: latitude, lng: longitude}
    });
    var div = document.createElement('div');
     var infowindow = new google.maps.InfoWindow({
    content: div
  });
      var places = that.props.places;

   that.props.places.map((place, i) =>{
  var coordinates = {lat:place.coordinates.lat,lng:place.coordinates.lon};

  var point = new google.maps.LatLng(coordinates.lat,coordinates.lng);

   var marker = new google.maps.Marker({
       position: point,
       title:place.name,
       visible:true,
       map:map,
       id:i
   });
   google.maps.event.addListener(marker, 'click', function() {
  that.setState({
      selectedPlace: that.props.places[marker.id],
      activeMarker: marker
          });
   ReactDOM.render( that.renderInfoWindow(that.state.selectedPlace), div );
  infowindow.setContent(div);
   infowindow.open(map, this);
  });

})
  var div = document.createElement('div');
    ReactDOM.render( that.renderInfoWindow(that.state.selectedPlace), div );
     var infowindow = new google.maps.InfoWindow({
    content: div
  });

  },
renderInfoWindow: function(place) {
  var that = this;
  return(
    <div className="info-window">
      <p>{place.name}</p>
      <img height="140px" width="140px" style={{marginLeft:'10px'}} src={place.image} />
      <button style={{marginTop:'5%'}} className="red-button button" onClick={that.props.schedulePlace.bind(that, place)}>Add to Day </button>
    </div>
  )
},
  render:function() {

    return (
      <div id="map-container">
        <div ref="map" id="map"><i className="fa fa-spinner fa-spin" ref="spinner" aria-hidden="true"></i></div>
      </div>
    )
  }
})


export default scriptLoader(["https://maps.googleapis.com/maps/api/js?key="+key]
)(MapaContainer);



