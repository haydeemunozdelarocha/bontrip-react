import React from 'react';
import { connect } from 'react-redux';
import scriptLoader from 'react-async-script-loader';
import { saveCity, navigateTo } from '../helpers/app';
import { typingAnimation } from '../helpers/animations';

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

  animatePlaceholder() {
    let animationWords = this.props.animatedPlaceholderWords;
    let $animatedElement = $(this.refs.animatedPlaceholder);

    typingAnimation({$element: $animatedElement, wordsArray: animationWords, defaultPlaceholder: 'Where to?'});

    $animatedElement.focusin(() => {
      $animatedElement.data('typingAnimationPaused', 'true');
    });

    $animatedElement.focusout(() => {
      $animatedElement.data('typingAnimationPaused', 'false');
    });
  }

  render() {
    if (this.props.animatedPlaceholder) {
      this.animatePlaceholder();
    }

    return (
      <div className="autocomplete l-centered-block input-with-top-label-wrapper" >
        <input className="input-light input-with-top-label" type="text" id="pac-input" ref={`${this.props.animatedPlaceholder ? 'animatedPlaceholder' : ''}`}/>
        <label>Tell us where you going next: </label>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state: state
});

export default connect(mapStateToProps)(scriptLoader([`https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places`]
)(CityAutocomplete));


