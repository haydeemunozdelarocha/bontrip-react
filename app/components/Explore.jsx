var React = require('react');
var Navigation = require('Navigation');
var ExploreCard = require('ExploreCard');
var GetPlaces = require('GetPlaces');
var Filters = require('Filters');
var SideExplore = require('SideExplore');
var $ = require('jquery');

var exploreStyle = {
  height:'100%',
  width:'100%',
  overflowX:'auto'
};

var Explore = React.createClass({

    getInitialState: function (){
      console.log('getting initial state');
      console.log(this.props.location.state);

      if(this.props.location.state){
        var referralState ={...this.props.location.state,places:[],venue:{name:''}};
      } else {
        var referralState = null;
      }

      return referralState || {places:[],venue:{name:''}};
  },
  componentDidMount: function() {
      console.log(this.state);
    this.retrievePlaces();

  },
  retrievePlaces: function (){
    console.log('getting places')
    var that = this;
    var city = that.state.cities[0] || 'Mexico City';
    GetPlaces.getRecommended(city).then(function(res){
      that.setState({
        places:res.data
      })
    }, function(errorMessage){
      that.setState({
        loading:true
      })
      return   console.log(errorMessage);
    })
  },
  viewPlace: function(place_id){
    console.log(place_id);
    var that = this;
    GetPlaces.viewPlace(place_id).then(function(res){

      console.log(res);
        that.setState({
        venue:res.data
      })

    }, function(errorMessage){
         return console.log(errorMessage);
    })
  },
    addPlace: function(place){
    console.log('adding place explore');
          console.log(this);
    GetPlaces.addPlace(place).then(function(res){
      console.log(res);
      if(res.data._id){
        console.log('found id');
        place.el.props.selected = true;
      }

    }, function(errorMessage){
         console.log(errorMessage);
    })
  },
  render: function () {
        console.log('rendering explore');

  if(this.state.tripId){
    var trip = true;
  } else {
    var trip = false;
  }
      return (
      <div style={exploreStyle}>
      <Navigation />
      <div className="filters">
      <Filters cities={this.state.cities} tripSelected={trip}/>
      </div>
      <SideExplore name={this.state.venue.name} description={this.state.venue.description} rating={this.state.venue.rating} photos={this.state.venue.photos}/>
      <div className="row" id="explore-container">
            {this.state.places && Object.keys(this.state.places).map(function(k, name) {
            return <ExploreCard  viewPlace={this.viewPlace}  name={this.state.places[k].venue.name} rating={this.state.places[k].venue.rating} photo ={this.state.places[k].photo} place_id={this.state.places[k].venue.id} key={this.state.places[k].venue.id}/>
        }.bind(this))}
      </div>
      </div>
    );

  }
});

module.exports = Explore;
