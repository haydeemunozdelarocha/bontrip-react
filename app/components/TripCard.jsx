var React = require('react');
var GetTrips = require('GetTrips');

var TripCard = React.createClass({
  handleSelect: function (e){
    console.log('handling click');
    var id = this.props.tripId;
    console.log(id);
    this.props.selectTrip(id);
  },
  render: function () {
    var {name,tripId} = this.props;

    return (
    <div className="large-4 columns">
    <div className="panel callout">
      <h2>{name}</h2>
        <img src={'https://s-media-cache-ak0.pinimg.com/originals/72/4c/86/724c862124ddd36ff5d089e5f2828a7c.jpg'} />
        <div style={{height:'10vh',width:'100%'}}>
        <button style={{marginTop:'10px',float:'right',backgroundColor:'#e5500b',color:'#fff'}} className="button" type="button" onClick={()=>{this.handleSelect()}}>Select</button>
        <a style={{marginTop:'10px',float:'left'}} href="/edittrip/{tripId}">Edit</a>
        </div>
      </div>
    </div>
    )
  }
});

module.exports = TripCard;
