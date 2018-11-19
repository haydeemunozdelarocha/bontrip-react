var React = require('react');

var SideExplore = React.createClass({
  getInitialState:function(){
    return {visible:'hidden'};
  },
  render: function () {
      var {name,photos,rating,description} = this.props;
      if(!description){
        description = 'No description available.';
      }
      var divStyle = {
          display:this.props.display
      };
    if(photos){
        var photoInit = photos.groups[0].items[0].prefix+'300x300'+photos.groups[0].items[0].suffix;
        var photoCount = photos.groups[0].items[0].length;
    }
    return (
    <div id="side-explore-container" style={divStyle} ref="side">
    <div><h4 onClick={()=>{this.props.handleClose()}} id="explore-close-button">X</h4></div>
    <h4 style={{marginTop:'4%'}}>{name}</h4>
    <img src={photoInit} style={{marginBottom:'5px'}}/>
    <p><strong>Rating: </strong>{rating}</p>
    <p><strong>Description:</strong></p>
    <p>{description}</p>
    </div>
    )
  }
});

module.exports = SideExplore;
