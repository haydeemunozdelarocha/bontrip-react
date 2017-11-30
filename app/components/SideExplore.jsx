var React = require('react');

var divStyle = {
  backgroundColor: '#d9f8f9',
  width:'33%',
  height:'100%',
  top: '0',
  position:'absolute',
  right:'0',
  zIndex:'1',
  display:'none'
};


var SideExplore = React.createClass({
componentDidUpdate: function(){
  console.log('updating');
  divStyle.display = 'block';
},
  render: function () {
  var {name,photos,rating,description} = this.props;
  if(photos){
  var photoInit = photos.groups[0].items[0].prefix+'300x300'+photos.groups[0].items[0].suffix;
  var photoCount = photos.groups[0].items[0].length;
  console.log(photoCount);
}
    return (
    <div style={divStyle}>
    <div><h1>X</h1></div>
    <h2>{name}</h2>
    <img src={photoInit}/>
    <p>Rating: {rating}</p>
    <p>Description: {description}</p>
    </div>
    )
  }
});

module.exports = SideExplore;
