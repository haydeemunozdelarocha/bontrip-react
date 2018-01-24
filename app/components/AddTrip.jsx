var React = require('react');
var $= require('jquery');
var GetPlaces = require('GetPlaces');
var {connect} = require('react-redux');
var actions = require('Actions');
var moment = require('moment');
var {browserHistory} = require('react-router');

import update from 'immutability-helper';
import Header from 'Header';
import AddCities from 'AddCities';
import CitiesMap from 'CitiesMap';
import SidePlanner from 'SidePlanner';
import LeftPanel from 'LeftPanel';
import RightPanel from 'RightPanel';


export var AddTrip = React.createClass({
  getInitialState: function (){
    var cities = this.props.cities;
    var likedPlaces = this.props.likedPlaces || [];
    var dates = this.props.end ? true : false;
    var location = {lat:37.7749,lng:-122.4194};
    return {
        loaded:false,
        user:this.props.user,
        trip:this.props.id,
        cards:[],
        places:[],
        likedPlaces:likedPlaces,
        location:this.props.location.state.coordinates,
        cities:cities,
        view:'all',
        category:'',
        loadingExplore:'visible',
        selectedDates:dates
    }
  },
  saveCity:function(city){
    var {dispatch} = this.props;
    confirm("Add city to trip?");
    dispatch(actions.addCity(null,city));
  },
  removeCity:function(city){
    var {dispatch} = this.props;
    confirm("Remove city from trip?");
    dispatch(actions.removeCity(null,city));
  },
  saveTrip:function(){
    if(!this.props.end || !this.props.start){
      alert("Please select your travel dates on left panel.")
    }
    if(!this.props.user){
      if(confirm("You are not logged in. Your changes will disappear if you leave the page. Would you like to login?")){
        browserHistory.push({pathname: '/login'});
      } else{
       browserHistory.push({pathname: '/planner'});
    }
  } else {
     browserHistory.push({pathname: '/planner'});
  }
  },
  render: function () {
      return (
      <div>
      <div className="row">
      <Header navigation={false} home={false}/>
      <LeftPanel image={"/images/explore.png"}>
      <AddCities cities={this.state.cities}/>
      </LeftPanel>
      <div id="save-trip-container" style={{width:'100%',display:'flex',justifyContent:'flex-end',paddingRight:'56px'}}>
      <button className="red-button" style={{zIndex:'90',position:'absolute',padding:'15px'}} onClick={this.saveTrip}>Save Trip</button>
      </div>
      <CitiesMap removeCity={this.removeCity} saveCity={this.saveCity} loaded={this.state.loaded} location={this.state.location}  cities={this.state.cities}/>
      </div>
      </div>
    );

  }
});

const mapStateToProps = (state) => {
  return {
      id:state.trip.selectedTrip.id,
      cities: state.trip.selectedTrip.cities,
      likedPlaces: state.trip.likedPlaces,
      end: state.trip.selectedTrip.end,
      start:state.trip.selectedTrip.start,
      user:state.login.user
   }};

export default connect(mapStateToProps)(AddTrip);
