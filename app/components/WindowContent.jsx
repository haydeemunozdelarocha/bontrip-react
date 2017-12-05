var React = require('react');

const style = {
  zIndex: 90
}

var WindowContent = React.createClass({
getInitialState:function(){
   console.log(this.refs);
return{};
},
componentDidMount:function(){
  console.log(this.refs);
},
clicking:function(){
  console.log('lick')
},
  render: function () {
      return (
      <div style={style}>
        <h4>{this.props.name}</h4>
        <img height="140px" width="140px" onClick={()=>{this.clicking()}} src={this.props.image} />
        <input className="button" ref="yes" id="HiddenButton" type="button" onClick="function hi(){console.log('clicking inline')}" value="click Me"/>
</div>
    );

  }
});

module.exports = WindowContent;
