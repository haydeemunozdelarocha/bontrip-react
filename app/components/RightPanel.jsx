var React = require('react');
var {connect} = require('react-redux');
var $= require('jquery');

import 'Sass';

export var RightPanel = React.createClass({

  showRightPanel:function(){
    console.log('show explore')
    $( ".right-main-container" ).toggleClass("open-planner", 300);

  },
  render: function () {

      return (
      <div className="right-main-container">
           <div id="right-tab">
              <img onClick={this.showRightPanel} id="right-tab-icon" src={this.props.image} />
          </div>
          {this.props.children}
      </div>
    );

  }
});


export default connect(null)(RightPanel);
