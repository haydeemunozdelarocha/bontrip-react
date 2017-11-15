var React = require('react');

var divStyle = {
  backgroundColor: '#d9f8f9',
  width:'33%',
  height:'100%',
  top: '0',
  position:'absolute',
  right:'0',
  zIndex:'1'
};


var SideExplore = React.createClass({
  render: function () {

    return (
    <div style={divStyle}>
    Side Panel
    </div>
    )
  }
});

module.exports = SideExplore;
