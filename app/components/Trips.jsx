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
  componentWillMount: function() {
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
  deleteTrip: function(trip_id){
    console.log('deleteing trip');
    var that = this;
    console.log(trip_id)
    GetTrips.deleteTrip(trip_id.tripId).then(function(res){
      console.log(res);
      browserHistory.push({pathname: '/trips'});

    }, function(errorMessage){
         return alert(errorMessage);
    })
  },
  retrieveTrips: function (){
    console.log('getting trips')
    var user= this.props.state.login.user;
    console.log(this.props.state.login.user);
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
    console.log('render');
      return (
      <div>
      <Header loggedIn={this.state.user}/>
      <div style={{height:'10vh',width:'100%',paddingRight:'32px'}}>
        <a style={{marginTop:'10px',float:'right',borderRadius:'5px',textTransform:'uppercase',fontFamily:'Dosis',fontWeight:'700',minWidth:'80px',backgroundColor:'#e5500b',color:'#fff'}} className="button" href="/newtrip" >New Trip</a>
      </div>
      <div className="row" style={{marginTop:'2%',display:'flex'}}>
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
