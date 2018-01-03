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

export var tripReducer = (state = {selectedTrip:{}},action)=>{
  // state = state || {name:'Anonymous'};

    switch(action.type){
      case 'SELECT_TRIP':
      return {
        ...state,
        selectedTrip:{id:action.id,cities:action.cities,start:action.start,end:action.end}
      };
      case 'LOGOUT':
      return {
        ...state,
        selectedTrip:{}
      };
      default:
      return state;
    }

};


