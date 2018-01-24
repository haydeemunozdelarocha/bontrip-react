var React = require('react');
var {connect} = require('react-redux');
import Header from 'Header';
import CityAutocomplete from 'CityAutocomplete';

import 'Sass';

var {browserHistory} = require('react-router');
var GetPlaces = require('GetPlaces');
var actions = require('Actions');
var moment = require('moment');
var $ = require('jquery');



const images = [
"/images/paris.jpg","/images/sardinia.jpg","/images/iceland.jpg","/images/madrid.jpg","/images/tokyo.jpg","/images/patagonia.jpg"
];

var count = 0;

export var Home = React.createClass({

 getInitialState: function (){
      var {dispatch} = this.props;
     dispatch(actions.logout());
   var height = $(window).height();
   var width = $(window).width();
    return {
      loading: true,
      buttonOff:false,
      citiesData:[],
      height:height,
      width:width,
      imageMargin:'auto',
      searchBarWidth:'30%'
     }
  },
    componentWillMount: function() {
        this.updateDimensions();
    },
    componentDidMount:function(){
    window.addEventListener("resize", this.updateDimensions);
    this.switchImage();
    this.checkUser();

  },
    checkUser: function (){
    if(this.props.state.login.user.length >0){
      browserHistory.push({pathname: '/trips'});
    } else {
      return;
    }
  },
  switchImage:function(){
      if(count < 5){
      count++;
      } else {
        count = 0;
      }
      this.refs.background.src = images[count];
     setTimeout(function() { this.switchImage() }.bind(this), 5000);
  },
  handleNewRequest:function(text){
    var cities =[];
    cities.push(text.text);
    this.setState({cities:cities});
    var {dispatch} = this.props;
    dispatch(actions.trip('',cities,moment(new Date()).format("YYYY-MM-DD"),''));
    browserHistory.push({pathname: '/planner'});
  },
    updateDimensions: function() {
      if($(window).width() <500){
        this.setState({
          width: 'auto',
          height: $(window).height(),
          imageMargin: "-255px",
          searchBarWidth:"100%",
          maxWidth:'1920px'
                  });
      } else if($(window).width() < 800 && $(window).width() > 500){
        this.setState({
          searchBarWidth:"90%"
        });
      } else {
       this.setState({
          width: $(window).width(),
          height: 'auto',
          imageMargin:"auto",
          maxWidth:$(window).width(),
          searchBarWidth:"60%",
        });
      }
    },
  addPlace:function(place){
    var {dispatch} = this.props;
    var city = new Object();
    place.address_components.forEach(function (i,address_component) {
       if (i.types[0] == "locality" || i.types[0] == "administrative_area_level_3"){
         city.name = i.long_name;
       }
      if (i.types[0] == "country"){
        city.country = i.long_name;
      }
      if (i.types[0] == "administrative_area_level_1"){
        city.state = i.short_name;
     }
    });

    city.coordinates = place.geometry.location;
    dispatch(actions.addCity(null,city));
    browserHistory.push({pathname: '/newtrip', state:{name:city.name,coordinates:city.coordinates}});
  },
  render: function () {
      var screenHeight = this.state.height;
      var screenWidth = this.state.width;
      var searchBarWidth = this.state.searchBarWidth;


    const background = {
      width: $(window).width(),
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      zIndex:'-9',
     position:'absolute',
      height:screenHeight,
      overflow:'hidden',
      top:'0'
    };

    const backgroundImage = {
      height:screenHeight,
      width:screenWidth,
      marginLeft:this.state.imageMargin,
      maxWidth:this.state.maxWidth,
      left:'50%',
      minHeight:$(window).height()
    };

    const searchContainer ={
      width:'80%',
      height:'87vh',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      margin:'auto'
    };

      return (
      <div style={{width:'100%',height:'100vh',overflow:'hidden'}}>
      <Header home={true} loggedIn={false} buttonOff = {this.state.buttonOff} />
      <div style={background}>
            <img style={backgroundImage} ref="background" id="background" src={images[0]} />
      </div>
      <div id='home-search-container' style={searchContainer}>
        <CityAutocomplete addPlace={this.addPlace}/>
      </div>
      </div>

    );

  }
});

const mapStateToProps = (state) => ({
  state: state
});

export default connect(mapStateToProps)(Home);
