var React = require('react');
import Header from 'Header';
var ExploreCard = require('ExploreCard');
var GetPlaces = require('GetPlaces');
var Filters = require('Filters');
var SideExplore = require('SideExplore');
var {connect} = require('react-redux');
var actions = require('Actions');

var exploreStyle = {
  height:'100vh',
  width:'100%',
  overflowX:'hidden'
};

export var Explore = React.createClass({
  getInitialState: function(){
    var cities =this.props.state.trip.selectedTrip.cities || this.props.location.state.cities;
    return {
    venue:{},
    places:[],
    cities:cities
  }
  },
  componentDidMount: function() {
    this.retrievePlaces();

  },
  retrievePlaces: function (){
    console.log('getting places')
    var that = this;
    var cities = that.state.cities;
    var city = cities[0];
    GetPlaces.getRecommended(city).then(function(res){
      that.setState({
        places:res.data,
        loading:'hidden'
      })
      that.refs.spinner.style.display='none';
    }, function(errorMessage){
      that.setState({
        loading:'visible'
      })
      return   console.log(errorMessage);
    })
  },
  viewPlace: function(place_id){
    var that = this;
    GetPlaces.viewPlace(place_id).then(function(res){

        that.setState({
        venue:res.data
      })

    }, function(errorMessage){
         return console.log(errorMessage);
    })
  },
    addPlace: function(place){
    console.log('adding place explore');
    GetPlaces.addPlace(place).then(function(res){
      if(res.data._id){
        place.el.props.selected = true;
      }

    }, function(errorMessage){
         console.log(errorMessage);
    })
  },
  render: function () {
  console.log('rendering explore');
  if(this.props.state.trip.selectedTrip.id){
    var trip = true;
  } else {
    var trip = false;
  }
      return (
      <div style={exploreStyle}>
      <Header />
      <div className="filters">
      <Filters cities={this.state.cities} tripSelected={trip}/>
      </div>
      <SideExplore display="none" name={this.state.venue.name} description={this.state.venue.description} rating={this.state.venue.rating} photos={this.state.venue.photos}/>
      <div className="row" id="explore-container">
            <i style={{fontSize:'72px',color:'#e9e9e9',visibility:this.state.loading}} className="fa fa-spinner fa-spin" ref="spinner" aria-hidden="true"></i>
            {this.state.places && Object.keys(this.state.places).map(function(k, name) {
              console.log(this.state.places[k].venue.categories[0].name);
            return <ExploreCard  viewPlace={this.viewPlace}  name={this.state.places[k].venue.name} category={this.state.places[k].venue.categories[0].name} rating={this.state.places[k].venue.rating} photo ={this.state.places[k].photo} place_id={this.state.places[k].venue.id} key={this.state.places[k].venue.id}/>
        }.bind(this))}
      </div>
      </div>
    );

  }
});

const mapStateToProps = (state) => ({
  state: state
});

export default connect(mapStateToProps)(Explore);
