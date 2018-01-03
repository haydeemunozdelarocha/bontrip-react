var React = require('react');
import Header from 'Header';
import MapaContainer from 'MapaContainer';
import SidePlanner from 'SidePlanner';
var $= require('jquery');
var GetPlaces = require('GetPlaces');
import update from 'immutability-helper'
var {connect} = require('react-redux');
var actions = require('Actions');
var moment = require('moment');

export var Planner = React.createClass({
    getInitialState: function (){

    return {
      loaded:false,
      date: this.props.state.trip.selectedTrip.start,
      cards:[],
      places:[],
      location:{lat:37.7815,lng:-122.3939}
    }
},componentDidMount:function(){
  this.fetchPlaces();
  this.scheduledPlaces();
},
  select:function(event){
  var date = event.target.value;
  this.setState({date: date}, function () {
      this.scheduledPlaces();
    });
  },
  scheduledPlaces: function (){
    var that = this;
    GetPlaces.getDay(that.state.date,that.props.state.trip.selectedTrip.id,that.props.state.login.user).then(function(res){
      that.setState({
        cards:res.data
      });
          console.log(that.state.cards)
    }, function(errorMessage){

      return   console.log(errorMessage);
    })
  },
  schedulingPlace: function(marker){
  console.log(marker);
  var that =this;
    var id= marker._id;
    GetPlaces.schedulePlace(id,this.state.date).then(function(res){
     that.scheduledPlaces();
  },function(errorMessage){

      return   alert(errorMessage);
    })
  },
    fetchPlaces: function(mapProps,map) {
    console.log('fecthing places');
    var that = this;

  GetPlaces.getLikedPlaces(that.props.state.login.user,that.props.state.trip.selectedTrip.id).then(function(res){
      if(res.data.length > 0){
      that.setState({
        loaded:true,
        places:res.data,
        location:{lat:res.data[0].coordinates.lat,
        lng:res.data[0].coordinates.lon}
      });
      }
      },function(errorMessage){
          this.setState({
            loaded:true,
            places:[]
          })
          return   alert(errorMessage);
      })
  },
  updateOrder:function(dragIndex, hoverIndex){
    const { cards } = this.state;
    const dragCard = cards[dragIndex];
    var that = this;
   GetPlaces.changeOrder(cards[hoverIndex]._id,dragIndex,dragCard._id,hoverIndex).then(function(res){
        that.setState(
      update(that.state, {
        cards: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
        },
      }),
    )
    }, function(errorMessage){

      return   console.log(errorMessage);
    })
  },
  render: function () {
      return (
      <div>
      <div className="row">
      <Header home={false}/>
      <SidePlanner changeOrder={this.updateOrder} cards={this.state.cards} date={this.state.date} select={this.select} end={this.props.state.trip.selectedTrip.end} start={this.props.state.trip.selectedTrip.start}/>
      <MapaContainer loaded={this.state.loaded} location={this.state.location} places={this.state.places} schedulePlace={this.schedulingPlace} date={this.state.date} places={this.state.places}/>
      </div>
      </div>
    );

  }
});

const mapStateToProps = (state) => ({
  state: state
});

export default connect(mapStateToProps)(Planner);

