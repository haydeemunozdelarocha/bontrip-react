import * as React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { saveCity, navigateTo } from '../../helpers/app';
import { Animations } from '../../helpers/Animations';
import Autosuggest from 'react-autosuggest';
import { City } from "../../models/City";
import { ICityAutocompleteProps, ICityAutocompleteState } from "./CityAutocomplete.I";
import {CitySuggestions} from "../../helpers/CitySuggestions";
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

class CityAutocomplete extends React.Component<ICityAutocompleteProps, ICityAutocompleteState> {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      suggestions: [],
      placeholder: 'Where to?'
    };
  }

  public componentWillMount(): void {
    source.cancel();
  }

  public onChange(event, { newValue }): void {
    const city: City = this.state.suggestions.find(suggestion => suggestion.name === newValue);

    this.setState({
      value: newValue
    });

    if (city) {
      saveCity(city);
      navigateTo('/newtrip');
    }
  };

  public updateSuggestions(autocomplete): void {
    let suggestions = [];

    if (autocomplete.value) {
      CitySuggestions.byName(autocomplete.value).then((response: City[]) => {
        suggestions = response;

        this.setState({
          suggestions: suggestions
        });
      });
    } else {
      this.setState({
        suggestions: suggestions
      });
    }
  };


  public renderSuggestion(suggestion): React.ReactNode {
    return (
      <ul className="autocomplete-results">
        <li className="autocomplete-results-item">{suggestion.name}</li>
      </ul>
    );
  }

  public render(): React.ReactNode {
    const { value, suggestions, placeholder } = this.state;
    const { animatedPlaceholderWords } = this.props;
    return (
      <Autosuggest
        ref={(autosuggest) => autosuggest && Animations.typing({
          element: autosuggest.input,
          wordsArray: animatedPlaceholderWords,
          defaultPlaceholder: 'Where to?'
        })}
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.updateSuggestions.bind(this)}
        onSuggestionsClearRequested={() => this.updateSuggestions({})}
        getSuggestionValue={suggestion => suggestion.name}
        renderSuggestion={this.renderSuggestion}
        inputProps={{
          placeholder: placeholder,
          value,
          onChange: this.onChange.bind(this)
        }}
      />
    );
  }
}

export default CityAutocomplete;


