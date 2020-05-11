import {City} from "../../models/City";

export interface ICityAutocompleteProps {
  animatedPlaceholderWords: string[];
}

export interface ICityAutocompleteState {
  value: string;
  suggestions: City[];
  placeholder: string;
}
