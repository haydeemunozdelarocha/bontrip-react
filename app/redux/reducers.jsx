import moment from 'moment';

const randomColor = require('randomcolor');

export const tripReducer = (state = { selectedTrip: { cities: [], id: null }, likedPlaces: [] }, action) => {
  switch(action.type) {
  case 'ADD_CITY':
    const index = state.selectedTrip.cities ? state.selectedTrip.cities.length : 0;

    if (index % 2) {
      action.city.color = randomColor({
          luminosity: 'bright',
          hue: 'red'
        });
    } else if (index % 3) {
      action.city.color = randomColor({
        luminosity: 'bright',
        hue: 'yellow'
      });
    } else {
      action.city.color = randomColor({
        luminosity: 'bright',
        hue: 'blue'
      });
    }
    return {
      ...state,
      selectedTrip: {
        trip_id: action.trip_id,
        cities: state.selectedTrip.cities ? [...state.selectedTrip.cities, action.city] : [action.city]
      }
    };

  case 'REMOVE_CITY':
    return {
      ...state,
      selectedTrip: {
        trip_id: action.trip_id,
        cities: state.selectedTrip.cities.filter(city => city.name !== action.city)
      }
    };

  case 'UPDATE_CITY_DIRECTIONS':
    state.selectedTrip.cities[action.cityIndex].directions = action.directions;
    return {
      ...state,
      selectedTrip: {
        trip_id: action.trip_id,
        cities: state.selectedTrip.cities
      }
    };

  case 'REORDER_CITY':
    let cities = state.selectedTrip.cities;
    let reorder_city = cities[action.initial_index];
    cities.splice(action.initial_index, 1);
    cities.splice(action.new_index, 0, reorder_city);
    return {
      ...state,
      selectedTrip: {
        cities: cities
      }
    };

  case 'ADD_DATES':
    const updatedCities = state.selectedTrip.cities.map((city) => {
      if (action.city_id == city.id) {
        city.startDate = action.startDate;
        city.endDate = action.endDate;
      }

      return city;
    });
    const sortedCities = updatedCities.sort(function(a, b){
      if (moment(a.startDate).isBefore(moment(b.startDate))) {
        return -1;
      }
      if (moment(a.startDate).isAfter(moment(b.startDate))) {
        return 1;
      }
      return 0;
    });
    console.log('sortedCities', sortedCities);

    return {
      ...state,
      selectedTrip: {
        cities: sortedCities
      }
    };

  case 'CLEAR_SESSION':
    return {
      ...state,
      selectedTrip: {},
      likedPlaces: []
    };
  default:
    return state;
  }
};
