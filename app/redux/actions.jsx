export const login = (user) => {
  return {
    type: 'LOGIN',
    user: user
  };
};

export const logout = (user) => {
  return {
    type: 'LOGOUT',
    user: user
  };
};

export const clearSelectedTrip = () => {
  return {
    type: 'CLEAR_SESSION',
    trip: {
      selectedTrip: {}
    }
  };
};

export const addCity = (id, city) => {
  return {
    type: 'ADD_CITY',
    id: id,
    city: city
  };
};

export const addStart = (id, start) => {
  return {
    type: 'ADD_START',
    id: id,
    start: start
  };
};

export var addEnd = (id,end) => {
  return {
    type:'ADD_END',
    id:id,
    end:end
    };
};

export var removeCity = (id, city) => {
  return {
    type:'REMOVE_CITY',
    id: id,
    city: city
    };
};

export var likedPlaces = (likedPlaces) => {
  return {
    type:'ADD_PLACES',
    likedPlaces:likedPlaces
  };
};

export var schedulePlaces = (id,date) => {
  return {
    type:'SCHEDULE_PLACE',
    id:id,
    date:date
  };
};
