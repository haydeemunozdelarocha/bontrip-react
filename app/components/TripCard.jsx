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
    var {name,tripId,photo} = this.props;
    return (
    <div className="large-4 columns">
    <div className="panel callout" style={{borderRadius:'5px',boxShadow: '5px 8px rgba(138, 155, 168,.4)'}}>
      <h4>{name}</h4>
        <div style={{width:'95%',minHeight:'55vh',height:'auto',overflow:'hidden',margin:'10px',position:'relative'}}>
    <img style={{position:'absolute',left:'-100%',right:'-100%',top:'-100%',bottom:'-100%',margin:'auto',minHeight:'55vh',height:'auto',width:'auto'}} src={photo}/>
</div>
        <div style={{height:'10vh',width:'100%'}}>
        <button style={{marginTop:'10px',float:'right',backgroundColor:'#e5500b',color:'#fff',fontFamily:'Dosis',textTransform:'uppercase',borderRadius:'5px',fontWeight:'700',minWidth:'80px'}} className="button" type="button" onClick={()=>{this.handleSelect()}}>Select</button>
        <a style={{marginTop:'10px',float:'left'}} onClick={()=>{this.props.deleteTrip({tripId})}}>Delete</a>
        </div>
      </div>
    </div>
    )
  }
});

module.exports = TripCard;
