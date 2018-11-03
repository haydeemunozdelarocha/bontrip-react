export const loginReducer = (state = { user: {} }, action) => {
  switch(action.type) {
  case 'LOGIN':
    return {
      ...state,
      user: action.user
    };

  case 'LOGOUT':
    return {
      ...state,
      user: null
    };

  default:
    return state;
  }
};

export const tripReducer = (state = { selectedTrip: { cities: [], id: null }, likedPlaces: [] }, action) => {
  switch(action.type) {
  case 'ADD_CITY':
    return {
      ...state,
      selectedTrip: {
        id: action.id,
        cities: state.selectedTrip.cities ? [...state.selectedTrip.cities,action.city] : [action.city]
      }
    };

  case 'REMOVE_CITY':
    return {
      ...state,
      selectedTrip: {
        id: action.id,
        cities: state.selectedTrip.cities.filter(city => city.name !== action.city.name)
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

  case 'ADD_PLACES':
    return {
      ...state,
      likedPlaces: [...state.likedPlaces, action.likedPlaces]
    };

  case 'SCHEDULE_PLACE':
    let places = state.likedPlaces.map((place) => {
      if (place.venueId === action.id) {
        place.day = action.date;
        place._id = place.venueId;
        return place;
      } else {
        return place;
      }
    });
    return {
      ...state,
      likedPlaces: places
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
