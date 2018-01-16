export var login = (user) => {
  return {
    type:'LOGIN',
    user:user
  };
};

export var logout = () => {
  return {
    type:'LOGOUT',
    trip:{selectedTrip:{}}
  };
};

export var trip = (id,cities,start,end) => {
  return {
    type:'SELECT_TRIP',
    id:id,
    cities:cities,
    start:start,
    end:end
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
