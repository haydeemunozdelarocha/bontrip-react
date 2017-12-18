export var login = (user) => {
  return {
    type:'LOGIN',
    user:user
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
