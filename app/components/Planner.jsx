var React = require('react');
var Navigation = require('Navigation');
import MapaContainer from 'MapaContainer';
import SidePlanner from 'SidePlanner';
var $= require('jquery');
var GetPlaces = require('GetPlaces');


var Planner = React.createClass({
    getInitialState: function (){
    return {
      loaded:false,
      date:'08-11-2016',
      end: '08-31-2016',
      start: '08-11-2016',
      date:'08-11-2016',
      tripId:"57bf7be55f67aef8082e7d91",
      userId:"57aa78b2caf5ca16154f457c",
      cards:[]
    }
},componentDidMount:function(){
  this.scheduledPlaces();
},
  select:function(event){
     var date=event.target.value;
this.setState({date: date}, function () {
this.scheduledPlaces();});
  },
  scheduledPlaces: function (){
    var that = this;
    GetPlaces.getDay(that.state.date,that.state.tripId,that.state.userId).then(function(res){
          that.setState({
        cards:res.data
      });
    }, function(errorMessage){

      return   console.log(errorMessage);
    })
  },
  schedulingPlace: function(id){
    console.log("scheduling",id);
    GetPlaces.schedulePlace(id,this.state.date).then(function(res){
      console.log(res);
  },function(errorMessage){

      return   alert(errorMessage);
    })
  },
  render: function () {
      return (
      <div>
      <div className="row">
      <Navigation/>
      <SidePlanner cards={this.state.cards} date={this.state.date} select={this.select} end={this.state.end} start={this.state.start}/>
      <MapaContainer schedulePlace={this.schedulingPlace} date={this.state.date}/>
      </div>
      </div>
    );

  }
});

module.exports = Planner;
