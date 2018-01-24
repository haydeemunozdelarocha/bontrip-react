var React = require('react');
var {connect} = require('react-redux');
var $= require('jquery');

import 'Sass';

export var LeftPanel = React.createClass({

  showLeftPanel:function(){
    console.log('show explore')
    $( ".main-left-container" ).toggleClass("open-explore", 300);

  },
  render: function () {

      return (
      <div className="main-left-container" >
      <div id="left-panel-inside">
        {this.props.children}
      </div>
       <div id="left-tab">
      <img onClick={this.showLeftPanel} id="left-tab-icon" src={this.props.image} />
      </div>
      </div>
    );

  }
});


export default connect(null)(LeftPanel);
