import * as actions from '../redux/actions';
import { browserHistory } from 'react-router';
import {GlobalStore} from "../redux/GlobalStore";
import {citiesActions} from "../redux/cities/cities.actions";
import {City} from "../models/City";
import {userActions} from "../redux/user/user.actions";

export function saveCity(cityInfo, index = 0, callback?) {
  const formattedCity = new City(cityInfo);

  formattedCity.generateColor(index);

  GlobalStore.dispatch(citiesActions.add({city: formattedCity}));
  GlobalStore.dispatch(userActions.setActiveCity({cityId: formattedCity.id}));
  if (callback) { callback(); }
}

export function removeCity(cityInfo, callback) {
  let city = cityInfo.name;
  GlobalStore.dispatch(actions.removeCity(null, city));
  if (callback) {
    callback();
  }
}

export function updateDirections(cityIndex, directions, callback) {
  GlobalStore.dispatch(actions.updateCityDirections(null, cityIndex, directions));
  if (callback) {
    callback();
  }
}

export function navigateTo(location) {
  browserHistory.push(location);
}
