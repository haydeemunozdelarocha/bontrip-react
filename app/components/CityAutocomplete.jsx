import React from 'react';
import { connect } from 'react-redux';
import scriptLoader from 'react-async-script-loader';
import { saveCity, navigateTo } from '../helpers/app';

const key = process.env.GOOGLE_KEY;

class CityAutocomplete extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentWillReceiveProps({ isScriptLoaded }) {
    if (isScriptLoaded && !this.props.isScriptLoaded) {
      this.setState({
        loading: false
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (!nextState.loading) {
      this.loadAutocomplete();
      return true;
    }
    return false;
  }

  loadAutocomplete() {
    const input = document.getElementById('pac-input');
    const options = {
      types: ['(cities)']
    };
    const autocomplete = new google.maps.places.Autocomplete(input, options);

    autocomplete.addListener('place_changed', function() {
      let place = autocomplete.getPlace();
      let callback = () => navigateTo('/newtrip');
      saveCity(place, callback);
    });
  }

  render() {
    return (
      <div className="autocomplete l-centered-block" >
        <input className="input-light" type="text" id="pac-input" placeholder="Where to?"/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state: state
});

export default connect(mapStateToProps)(scriptLoader([`https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places`]
)(CityAutocomplete));


