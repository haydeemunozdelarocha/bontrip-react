import {GlobalStore, IReduxState} from "../GlobalStore";
import {createGetCities} from "./cities.selectors";
import {City} from "../../models/City";
import {citiesActions} from "./cities.actions";
import {userActions} from "../user/user.actions";

const saveCity = (city) => {
  return (dispatch, getState: () => IReduxState) => {
    const savedCities = createGetCities()(getState());
    const isCityAlreadyAdded = savedCities.find((savedCity => savedCity.name === city.name));
    const formattedCity = new City(city);
    const index = savedCities.length > 0 ? savedCities.length - 1 : 0;
    formattedCity.generateColor(index);

    if (!isCityAlreadyAdded) {
      dispatch(citiesActions.add({city: formattedCity}));
      dispatch(userActions.setActiveCity({cityId: formattedCity.id}));
    }
  }
};

export const citiesThunks = {
  saveCity
};
