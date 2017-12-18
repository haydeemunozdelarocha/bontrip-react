var React = require('react');

var divStyle = {
  backgroundColor: '#d9f8f9',
  width:'33%',
  height:'100%',
  top: '0',
  position:'absolute',
  right:'0',
  zIndex:'1',
  display:'none',
  zIndex:20,
  overflowX:'auto',
  padding:'1% 2%'
};


var SideExplore = React.createClass({
componentDidUpdate: function(){
  console.log('updating');
  divStyle.display = 'block';
},
handleClose:function(){
  this.refs.side.style ={...divStyle,display:'none'};
},
  render: function () {
  var {name,photos,rating,description} = this.props;
  if(photos){
  var photoInit = photos.groups[0].items[0].prefix+'300x300'+photos.groups[0].items[0].suffix;
  var photoCount = photos.groups[0].items[0].length;
  console.log(photoCount);
}
    return (
    <div style={divStyle} ref="side">
    <div><h4 onclick={()=>{this.handleClose()}}style={{float:'right',right:'8px',top:'8px',cursor:'pointer'}}>X</h4></div>
    <h4 style={{marginTop:'4%'}}>{name}</h4>
    <img src={photoInit}/>
    <p><strong>Rating:</strong>{rating}</p>
    <p><strong>Description:</strong></p>
    <p>{description}</p>
    </div>
    )
  }
});

module.exports = SideExplore;
