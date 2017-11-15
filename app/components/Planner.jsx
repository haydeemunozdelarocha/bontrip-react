var React = require('react');
var Navigation = require('Navigation');
var GetPlaces = require('GetPlaces');
var Mapa = require('Mapa');


var Planner = React.createClass({

    getInitialState: function (){
      console.log('getting initial state');
      console.log(this);
    return {loading:true};
  },


  render: function () {

      return (
      <div>
      <Navigation />
      <div className="row">
      <Mapa/>
      </div>
      </div>
    );

  }
});

module.exports = Planner;
