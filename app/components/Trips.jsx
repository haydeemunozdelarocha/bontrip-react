var React = require('react');
import Header from 'Header';
var TripCard = require('TripCard');
var GetTrips = require('GetTrips');
var {connect} = require('react-redux');
var actions = require('Actions');
var {browserHistory} = require('react-router');

export var Trips = React.createClass({

    getInitialState: function (){
     return {loading:true,trips:[]};
  },
  componentDidMount: function() {
    if(this.state.loading){
    this.retrieveTrips();
    }
  },
  selectTrip: function(trip_id){
    console.log('selecting trip');
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
  retrieveTrips: function (){
    console.log('getting trips')
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
      return   alert(errorMessage);
    })
  },
  render: function () {
      return (
      <div>
      <Header loggedIn={this.state.user}/>
      <div className="row" style={{marginTop:'2%'}}>
            {this.state.trips && Object.keys(this.state.trips).map(function(k, name) {
            return <TripCard selectTrip={this.selectTrip} name={this.state.trips[k].name} tripId={this.state.trips[k]._id} key={this.state.trips[k]._id}/>
        }.bind(this))}
      </div>
      </div>
    );

  }
});

const mapStateToProps = (state) => ({
  state: state
});

export default connect(mapStateToProps)(Trips);
