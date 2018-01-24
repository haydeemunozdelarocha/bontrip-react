var redux = require('redux');


export var loginReducer = (state = {user:{}},action)=>{
  // state = state || {name:'Anonymous'};

    switch(action.type){
      case 'LOGIN':
      return {
        ...state,
        user:action.user
      };
      case 'LOGOUT':
      return {
        ...state,
        user:''
      };
      default:
      return state;
    }

};

export var tripReducer = (state = {selectedTrip:{cities:[],id:null},likedPlaces:[]},action)=>{
  // state = state || {name:'Anonymous'};
    switch(action.type){
      case 'ADD_CITY':
        var cities = state.selectedTrip.cities ? [...state.selectedTrip.cities,action.city] : [action.city];
      return {
        ...state,
        selectedTrip:{
          id:action.id,
          cities:cities
        }
      };
      case 'REMOVE_CITY':
        var cities = state.selectedTrip.cities.filter(city => city.name !== action.city.name)
      return {
        ...state,
        selectedTrip:{
          id:action.id,
          cities:cities
        }
      };
      case 'ADD_START':
      return {
        ...state,
        selectedTrip:{
          ...state.selectedTrip,
          start:action.start
        }
      };
      case 'ADD_END':
      return {
        ...state,
        selectedTrip:{
          ...state.selectedTrip,
          end:action.end
        }
      };
      case 'ADD_PLACES':
      return {
        ...state,
        likedPlaces:[...state.likedPlaces,action.likedPlaces]
      };
      case 'SCHEDULE_PLACE':
      var map1 = state.likedPlaces.map((place) => {if(place.venueId === action.id){place.day = action.date; place._id = place.venueId; return place;} else {return place}});
      return {
        ...state,
        likedPlaces: map1
      };
      case 'LOGOUT':
      return {
        ...state,
        selectedTrip:{},
        likedPlaces:[]
      };
      default:
      return state;
    }

};


