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

export var tripReducer = (state = {selectedTrip:{},likedPlaces:[]},action)=>{
  // state = state || {name:'Anonymous'};

    switch(action.type){
      case 'SELECT_TRIP':
      return {
        ...state,
        selectedTrip:{id:action.id,cities:action.cities,start:action.start,end:action.end}
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


