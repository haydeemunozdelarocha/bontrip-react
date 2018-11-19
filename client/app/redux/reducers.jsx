export const tripReducer = (state = { selectedTrip: { cities: [], id: null }, likedPlaces: [] }, action) => {
  switch(action.type) {
  case 'ADD_CITY':
    return {
      ...state,
      selectedTrip: {
        trip_id: action.trip_id,
        cities: state.selectedTrip.cities ? [...state.selectedTrip.cities,action.city] : [action.city]
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

  case 'REORDER_CITY':
    let cities = state.selectedTrip.cities;
    let reorder_city = cities[action.initial_index];
    console.log(reorder_city);
    cities.splice(action.initial_index, 1);
    cities.splice(action.new_index, 0, reorder_city);
    return {
      ...state,
      selectedTrip: {
        cities: cities
      }
    };

  case 'ADD_START':
    return {
      ...state,
      selectedTrip: {
        ...state.selectedTrip,
        start: action.start
      }
    };

  case 'ADD_END':
    return {
      ...state,
      selectedTrip: {
        ...state.selectedTrip,
        end: action.end
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
