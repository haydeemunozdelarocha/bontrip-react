var React= require('react');
var ReactDOM= require('react-dom');
import scriptLoader from 'react-async-script-loader';
import 'Sass';
var {connect} = require('react-redux');


var key=process.env.GOOGLE_KEY;


export var CitiesMap = React.createClass({
    getInitialState: function (){
    return {
      loaded:false,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      start:this.props.location
    };
  },
  componentDidUpdate:function(nextProps){
    this.loadMap();
  },
  componentDidMount:function(){
       const { isScriptLoaded, isScriptLoadSucceed } = this.props
    if (isScriptLoaded && isScriptLoadSucceed) {
        this.loadMap();
    }

  },
  loadMap:function(){
    var that = this;
    var cities = that.props.state.trip.selectedTrip.cities;
    console.log(google)
    var map = new google.maps.Map(that.refs.map, {
      zoom: 8,
      center: cities[0].coordinates
    });

    var div = document.createElement('div');
     var infowindow = new google.maps.InfoWindow({
        content: div
      });
      var geocoder = new google.maps.Geocoder;
      var directionsService = new google.maps.DirectionsService();

   cities.map((city, i) =>{
  var coordinates = {lat:city.coordinates.lat,lng:city.coordinates.lon};

  var point = city.coordinates;

   var marker = new google.maps.Marker({
       position: point,
       title:city.name,
       visible:true,
       map:map,
       id:i
   });
        var bounds = new google.maps.LatLngBounds();
        if(cities.length > 1 && i < cities.length-1){
        var start = cities[i].coordinates;
        var end = cities[i+1].coordinates;
        bounds.extend(start);
        bounds.extend(end);
        map.fitBounds(bounds);
        var request = {
            origin: start,
            destination: end,
            travelMode: google.maps.TravelMode.DRIVING
        };
        directionsService.route(request, function (response, status) {

            if (status == google.maps.DirectionsStatus.OK) {
                var directionsDisplay = new google.maps.DirectionsRenderer();
                cities[i].distance = response.routes[0].legs[0].distance.text;
                cities[i].duration = response.routes[0].legs[0].duration.text;
                directionsDisplay.setDirections(response);
                directionsDisplay.setMap(map);
                directionsDisplay.setOptions( { suppressMarkers: true } );
            } else {
                alert("Directions Request from " + start.toUrlValue(6) + " to " + end.toUrlValue(6) + " failed: " + status);
            }

        });
      }
   google.maps.event.addListener(marker, 'click', function() {

   ReactDOM.render(that.renderInfoWindow(cities[marker.id]),div);
  infowindow.setContent(div);
   infowindow.open(map, this);
    document.getElementById("remove-button").addEventListener("click", function() {
      that.props.removeCity(cities[[marker.id]])
    });
  });

         google.maps.event.addListener(map, 'click', function(event) {
            var myLatLng = event.latLng;
            var lat = myLatLng.lat();
            var lng = myLatLng.lng();
            that.getCity(geocoder, map, infowindow,lat,lng);
      });

})

  },

renderInfoWindow: function(city) {
  var that = this;
  var name = (city.country === "United States") ? city.name+", "+city.state : city.name+", "+city.country;
  var distance = city.distance ? 'Distance: '+city.distance : 'First Stop';
  var duration = city.duration ? 'Duration: '+city.duration : '';
  return(
    <div className="info-window">
      <p>{name}</p>
      <p>{duration}</p>
      <p>{distance}</p>
      <button className="red-button" style={{padding:'10px'}} id="remove-button">Remove</button>
    </div>
  )
},
getCity:function(geocoder, map,infowindow,lat,lng){
  var that = this;
        var latlng = {lat: parseFloat(lat), lng: parseFloat(lng)};
        geocoder.geocode({'location': latlng}, function(results, status) {
          if (status === 'OK') {
            if (results[0]) {
              map.setZoom(8);
              var marker = new google.maps.Marker({
                position: latlng,
                map: map
              });
              var city = new Object();
              results[0].address_components.forEach(function (i,address_component) {
                if (i.types[0] == "locality"){
                    city.name = i.long_name;
                }

                if (i.types[0] == "country"){
                    city.country = i.long_name;
                }
                if (i.types[0] == "administrative_area_level_1"){
                    city.state = i.short_name;
                }

                city.coordinates = new google.maps.LatLng(latlng);
            });

        var directionsDisplay = new google.maps.DirectionsRenderer();

        directionsDisplay.setMap(map);
        var directionsService = new google.maps.DirectionsService();
        var bounds = new google.maps.LatLngBounds();
        var start = new google.maps.LatLng(that.state.start.lat(),that.state.start.lng());
        var end = new google.maps.LatLng(lat, lng);
        bounds.extend(start);
        bounds.extend(end);
        map.fitBounds(bounds);
        var request = {
            origin: start,
            destination: end,
            travelMode: google.maps.TravelMode.DRIVING
        };
        directionsService.route(request, function (response, status) {

            if (status == google.maps.DirectionsStatus.OK) {
                var distance = response.routes[0].legs[0].distance.text;
                var duration = response.routes[0].legs[0].duration.text;
                directionsDisplay.setDirections(response);
                directionsDisplay.setMap(map);
                directionsDisplay.setOptions( { suppressMarkers: true } );
                var div = document.createElement('div');
                div.className="add-city-window";
                var namep = document.createElement('p');
                var name = (city.country === "United States") ? city.name+", "+city.state : city.name+", "+city.country
                var name = document.createTextNode(name);
                var distance = document.createTextNode("Distance: "+distance);
                var distancep = document.createElement('p');
                var duration = document.createTextNode("Duration: "+duration);
                var durationp = document.createElement('p');
                namep.appendChild(name);
                distancep.appendChild(distance);
                durationp.appendChild(duration);
                div.appendChild(namep);
                div.appendChild(distancep);
                div.appendChild(durationp);
                var btn = document.createElement("BUTTON");
                var value = document.createTextNode("Add to Trip");
                btn.appendChild(value);
                div.appendChild(btn);
                btn.className="button";
                btn.className="red-button";
                btn.addEventListener("click", function(){
                  that.props.saveCity(city)
                })
                infowindow.setContent(div);
               infowindow.open(map, marker);

            } else {
                alert("Directions Request from " + start.toUrlValue(6) + " to " + end.toUrlValue(6) + " failed: " + status);
            }

        });
        google.maps.event.addListener(infowindow,'closeclick',function(){
                 marker.setMap(null);
                 directionsDisplay.setMap(null);
              });
            } else {
              window.alert('No results found');
               marker.setMap(null);
              directionsDisplay.setMap(null);
            }
          } else {
            window.alert('Geocoder failed due to: ' + status);
              marker.setMap(null);
              directionsDisplay.setMap(null);
          }
        });

},
render:function() {

    return (
      <div id="map-container">
        <div ref="map" id="map"><i className="fa fa-spinner fa-spin" ref="spinner" aria-hidden="true"></i></div>
      </div>
    )
  }
})


const mapStateToProps = (state) => {
  return {
  state: state
}};

var CitiesMap = scriptLoader(["https://maps.googleapis.com/maps/api/js?key="+key+"&libraries=places"]
)(CitiesMap)

export default connect(mapStateToProps)(CitiesMap);
