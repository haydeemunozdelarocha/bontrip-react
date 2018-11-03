import * as actions from '../actions/actions';
import { browserHistory } from 'react-router';
import { store } from '../app';
import Promise from 'promise';

export function parseCityObject(cityObject) {
  let city = {};
  let address_components = cityObject.address_components;
  address_components.forEach(function(component) {
    if (isAddressComponentValid(component)) {
      let componentType = getComponentType(component);
      city[componentType] = component.long_name;
    }
  });
  city.coordinates = cityObject.geometry.location;
  return city;
}

export function saveCity(cityInfo, callback) {
  console.log('saving city', callback);
  let is_formatted = 'address_components' in cityInfo;
  let city = is_formatted ? parseCityObject(cityInfo) : cityInfo;
  console.log(city);
  store.dispatch(actions.addCity(null, city));
  callback();
}

export function removeCity(cityInfo, callback) {
  console.log('removing city');
  // TODO: fix is not removing city
  let city = cityInfo.name;
  store.dispatch(actions.removeCity(null, city));
  callback();
}

export function reverseGeoCode(googleLocation) {
  let geocoder = new google.maps.Geocoder;
  let latlng = {lat: parseFloat(googleLocation.lat()), lng: parseFloat(googleLocation.lng())};

  return new Promise((resolve, reject) => {
    geocoder.geocode({ 'location': latlng }, function(results, status) {
      if (status === 'OK') {
        if (results[0]) {
          let cityNameresults = results.filter((result) => result.types.includes('locality') && result.types.includes('political'));
          console.log(cityNameresults);
          resolve(cityNameresults[0]);
        } else {
          window.alert('No results found');
          reject();
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
        reject();
      }
    });
  });
}

export function navigateTo(location) {
  console.log('navigating');
  browserHistory.push(location);
}

function getComponentType(address_component) {
  switch(address_component.types[0]) {
    case 'locality':
    case 'administrative_area_level_3':
      return 'name';
    case 'country':
      return 'country';
    case 'administrative_area_level_1':
      return 'state';
  }
}

function isAddressComponentValid(address_component) {
  return address_component.long_name.length > 0;
}
