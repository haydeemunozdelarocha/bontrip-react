// TRIPS
export const addCity = (trip_id, city) => {
  return {
    type: 'ADD_CITY',
    trip_id: trip_id,
    city: city
  };
};

export var removeCity = (trip_id, city) => {
  return {
    type: 'REMOVE_CITY',
    trip_id: trip_id,
    city: city
  };
};

export var updateCityDirections = (trip_id, cityIndex, directions) => {
  return {
    type: 'UPDATE_CITY_DIRECTIONS',
    trip_id: trip_id,
    cityIndex: cityIndex,
    directions: directions
  };
};

export var reorderCity = (trip_id, initial_index, new_index) => {
  return {
    type: 'REORDER_CITY',
    trip_id: trip_id,
    initial_index: initial_index,
    new_index: new_index
  };
};

export const addStart = (trip_id, start) => {
  return {
    type: 'ADD_START',
    trip_id: trip_id,
    start: start
  };
};

export var addEnd = (trip_id, end) => {
  return {
    type: 'ADD_END',
    trip_id: trip_id,
    end: end
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
