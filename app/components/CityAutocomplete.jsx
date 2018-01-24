var React= require('react');
var ReactDOM= require('react-dom');
var {browserHistory} = require('react-router');
var $ = require('jquery');
import scriptLoader from 'react-async-script-loader';
import 'Sass';

var key=process.env.GOOGLE_KEY;

export var CityAutocomplete = React.createClass({
    getInitialState: function (){
    return {
      loading: true
     }
  },
componentWillReceiveProps ({ isScriptLoaded, isScriptLoadSucceed }) {
    if (isScriptLoaded && !this.props.isScriptLoaded) {
      this.isLoaded();
    }},
  isLoaded: function(){
      this.setState({
        loading:false
      })
  }
  ,shouldComponentUpdate:function(nextProps, nextState){
    if(!nextState.loading){
      this.loadAutocomplete();
      return true;
    } else {
      return false;
    }
  },
  loadAutocomplete:function(){
    var that = this;
    var input = that.refs.input;
    var autocomplete = new google.maps.places.Autocomplete(input);

    autocomplete.addListener('place_changed', function() {
        var place = autocomplete.getPlace();
        that.props.addPlace(place);
    });

  },
render:function() {
    return (
      <div id="city-autocomplete-container" >
        <input type="text" ref="input" id="pac-input" placeholder="Where to?"/>
      </div>
    )
  }
})

export default scriptLoader(["https://maps.googleapis.com/maps/api/js?key="+key+"&libraries=places"]
)(CityAutocomplete);
