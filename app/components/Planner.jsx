var React = require('react');
var Navigation = require('Navigation');
import MapaContainer from 'MapaContainer';
import SidePlanner from 'SidePlanner';


var Planner = React.createClass({

    getInitialState: function (){
      console.log('getting initial state');
      console.log(this);
    return {loaded:false,
      places:[]};
  },
  componentDidMount: function() {
    console.log(this.state);
  },
  render: function () {
      return (
      <div>
      <div className="row">
      <Navigation/>
       <SidePlanner/>
      <MapaContainer/>
      </div>
      </div>
    );

  }
});

module.exports = Planner;
