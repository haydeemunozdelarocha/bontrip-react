var {Map, InfoWindow, Marker, GoogleApiWrapper} = require('google-maps-react');
var React= require('react');
var Mapa= require('Mapa');
import SidePlanner from 'SidePlanner';

var key = process.env.GOOGLE_KEY;
console.log(key);



var MapaContainer = React.createClass({
  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    return (
          <div>
        <Mapa google={this.props.google}/>
      </div>
    )
  }
})

export default GoogleApiWrapper({
  apiKey: key
})(MapaContainer)
