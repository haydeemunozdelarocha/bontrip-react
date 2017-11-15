var React = require('react');
var Navigation = require('Navigation');
var Trips = require('Trips');



var Home = React.createClass({

    getInitialState: function (){
      console.log('getting initial state')
    return {
      loading: true,
      trips:{}
     }
  },
  render: function () {
      return (
      <div>
      <Navigation />
      <Trips />
      </div>
    );

  }
});

module.exports = Home;
