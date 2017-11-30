var React = require('react');
var GetTrips = require('GetTrips');
var {browserHistory} = require('react-router');

var TripCard = React.createClass({
  handleSelect: function (e){
    console.log('handling click');
    var id = this.props.tripId;
    console.log(id);
    this.selectTrip(id);
  },
  selectTrip: function(trip_id){
        console.log('selecting trip');
        var that = this;
    GetTrips.selectTrip(trip_id).then(function(res){
      console.log(res.data);
      that.setState({
        tripId:trip_id,
        cities: res.data
      })
      console.log(that.state);
        // browserHistory.push('/explore');
      browserHistory.push({pathname: '/explore', state: that.state});


    }, function(errorMessage){
      that.setState({
        user:{}
      })
         return alert(errorMessage);
    })
  },
  render: function () {
    var {name,tripId} = this.props;

    return (
    <div className="large-4 columns">
    <div className="panel callout">
      <h2>{name}</h2>
        <img src={'https://s-media-cache-ak0.pinimg.com/originals/72/4c/86/724c862124ddd36ff5d089e5f2828a7c.jpg'} />
        <button className="button" type="button" onClick={()=>{this.handleSelect()}}>Select</button>
      </div>
    </div>
    )
  }
});

module.exports = TripCard;
