var React = require('react');
var Navigation = require('Navigation');
var GetPlaces = require('GetPlaces');


var Map = React.createClass({

    getInitialState: function (){
      console.log('getting initial state');

    return {loading:true}
  },
  componentDidMount: function() {
    console.log(this.state);

    this.retrievePlaces();

  },
  retrievePlaces: function (){
    console.log('getting places')
    var that = this;
    console.log(that.state.city);
    var city = that.state.city || 'Mexico City';
    GetPlaces.getRecommended(city).then(function(res){
      that.setState({
        places:res.data
      })
      console.log(places);
    }, function(errorMessage){
      that.setState({
        loading:true
      })
      return   alert(errorMessage);
    })
  },
  render: function () {

      return (
      <div>
      <Navigation />
      <div className="row">
Mapa
      </div>
      </div>
    );

  }
});

module.exports = Map;
