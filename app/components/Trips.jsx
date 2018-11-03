var React = require('react');
var TripCard = require('./TripCard');
var GetTrips = require('../api/GetTrips');
var {connect} = require('react-redux');
var actions = require('../redux/actions');
var {browserHistory} = require('react-router');
import Header from './Header';

export var Trips = React.createClass({

  getInitialState: function (){
     return {loading:true,trips:[]};
  },
  componentWillMount: function() {
    if(this.state.loading){
    this.retrieveTrips();
    }
  },
  selectTrip: function(trip_id){
    var that = this;
    var {dispatch} = that.props;
    GetTrips.selectTrip(trip_id).then(function(res){
      dispatch(actions.trip(trip_id,res.data.cities,res.data.start,res.data.end));
      browserHistory.push({pathname: '/explore', state: that.state});
    }, function(errorMessage){
      that.setState({
        user:{}
      })
         return alert(errorMessage);
    })
  },
  deleteTrip: function(trip_id){
    var that = this;
    GetTrips.deleteTrip(trip_id.tripId).then(function(res){
      browserHistory.push({pathname: '/trips'});

    }, function(errorMessage){
         return alert(errorMessage);
    })
  },
  retrieveTrips: function (){
    var user= this.props.state.login.user;
    var that = this;
    GetTrips.getTrips(user).then(function(res){
      that.setState({
        trips:res.data,
        loading:false,
        activeTrip:""
      })
    }, function(errorMessage){
      that.setState({
        loading:true
      })
      return   console.log(errorMessage);
    })
  },
  render: function () {
  var trips;
  if(!this.state.loading){
      if (this.state.trips.length>0) {
        trips = this.state.trips && Object.keys(this.state.trips).map(function(k, name) {
            return <TripCard deleteTrip={this.deleteTrip} selectTrip={this.selectTrip} name={this.state.trips[k].name} tripId={this.state.trips[k]._id} photo={this.state.trips[k].photo} key={this.state.trips[k]._id}/>;
            }.bind(this));
      } else {
        trips = <span style={{marginLeft:'2%'}}>No trips created yet. <a href='/newtrip'>Create your first trip.</a></span>;
      }
  }
      return (
      <div>
      <Header loggedIn={this.state.user}/>
      <div id="new-trip-button-container">
        <a className="red-button button" href="/newtrip">New Trip</a>
      </div>
      <div className="row" id="trips-container">
            {trips}
      </div>
      </div>
    );

  }
});

const mapStateToProps = (state) => ({
  state: state
});

export default connect(mapStateToProps)(Trips);
