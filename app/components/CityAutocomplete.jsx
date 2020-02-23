import React from 'react';
import { connect } from 'react-redux';
import {saveCity, navigateTo, getCitySuggestionsByName} from '../helpers/app';
import { typingAnimation } from '../helpers/animations';
import $ from 'jquery';
import Autosuggest from 'react-autosuggest';

class CityAutocomplete extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      suggestions: [],
      placeholder: 'Where to?'
    };
  }

  componentDidMount() {
    this.animatePlaceholder();

    // $('.autocomplete-results-item').click(this.selectCity());
  }

  animatePlaceholder() {
    let animationWords = this.props.animatedPlaceholderWords;
    let $animatedElement = $('.react-autosuggest__input');

    typingAnimation({$element: $animatedElement, wordsArray: animationWords, defaultPlaceholder: 'Where to?'});

    $animatedElement.focusin(() => {
      $animatedElement.data('typingAnimationPaused', 'true');
    });

    $animatedElement.focusout(() => {
      $animatedElement.data('typingAnimationPaused', 'false');
    });
  }

  onChange = (event, { newValue }) => {
    console.log('new value', newValue);
    const city = this.getCityFromSuggestions(newValue);
    console.log('CITY', city);
    this.setState({
      value: newValue
    }, () => {
      if (city) {
        const callback = () => navigateTo('/newtrip');
        saveCity(city, callback);
      }
    });
  };

  getCityFromSuggestions(name) {
    const city = this.state.suggestions.filter(suggestion => suggestion.name === name);
    return city.length > 0 ? city[0] : null;
  }

  onSuggestionsFetchRequested = ({ value }) => {
    getCitySuggestionsByName(value).then((response) => {
      this.setState({
        suggestions: response
      });
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  getSuggestionValue = suggestion => suggestion.name;

  renderSuggestion = suggestion => (
    <ul className="autocomplete-results">
      <li className="autocomplete-results-item">{suggestion.name}</li>
    </ul>
  );

  render() {
    const { value, suggestions, placeholder } = this.state;

    const inputProps = {
      placeholder: placeholder,
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest
        ref='animatedPlaceholder'
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  state: state
});

export default connect(mapStateToProps)(CityAutocomplete);


