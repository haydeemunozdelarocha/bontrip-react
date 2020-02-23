import * as actions from '../redux/actions';
import { browserHistory } from 'react-router';
import { store } from '../app';
import Promise from 'promise';
const axios = require('axios');
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
const uuidv4 = require("uuid/v4")
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
  city.directions = cityObject.directions;
  return city;
}

export function saveCity(cityInfo, callback) {
  cityInfo.id = uuidv4();
  store.dispatch(actions.addCity(null, cityInfo));

  if (callback) { callback(); }
}

export function removeCity(cityInfo, callback) {
  let city = cityInfo.name;
  store.dispatch(actions.removeCity(null, city));
  if (callback) {
    callback();
  }
}

export function updateDirections(cityIndex, directions, callback) {
  store.dispatch(actions.updateCityDirections(null, cityIndex, directions));
  if (callback) {
    callback();
  }
}

export function reverseGeoCode(googleLocation) {
  let geocoder = new google.maps.Geocoder;
  let latlng = {lat: parseFloat(googleLocation.lat()), lng: parseFloat(googleLocation.lng())};

  return new Promise((resolve, reject) => {
    geocoder.geocode({ 'location': latlng }, function(results, status) {
      if (status === 'OK') {
        if (results[0]) {
          let cityTypeResults = results.filter((result) => result.types.includes('locality') && result.types.includes('political'));
          let pointOfInterestTypeResults = cityTypeResults.length === 0 ? results.filter((result) => result.types.includes('point_of_interest')) : '';
          let filteredResults = cityTypeResults[0] || pointOfInterestTypeResults[0];
          resolve(filteredResults);
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

export function getCitySuggestionsByName(searchText) {
  return new Promise((resolve, reject) => {
    axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${searchText}.json?types=place&access_token=pk.eyJ1IjoiaGF5ZGVlbXVub3oiLCJhIjoiY2pjbDhlaHFmMDR2ejMycXE0cng1dTR3bCJ9.0TAB6eibuUih8GaLPvaIpA`)
      .then(function (response) {
        const cities = [];

        response.data.features.map((city) => {
          cities.push({
            name: city.matching_place_name || city.place_name,
            coordinates: city.geometry.coordinates
          });
        });

        resolve(cities);
      })
      .catch(function (error) {
        reject(error);
      })
  });
}

export function getCitySuggestionsByCoordinates(longitude, latitude) {
  return new Promise((resolve, reject) => {
    axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?types=place&access_token=pk.eyJ1IjoiaGF5ZGVlbXVub3oiLCJhIjoiY2pjbDhlaHFmMDR2ejMycXE0cng1dTR3bCJ9.0TAB6eibuUih8GaLPvaIpA`)
      .then(function (response) {
        const cities = [];
        console.log(response);
        response.data.features.map((city) => {
          cities.push({
            name: city.matching_place_name || city.place_name,
            coordinates: city.geometry.coordinates
          });
        });

        resolve(cities[0]);
      })
      .catch(function (error) {
        reject(error);
      })
  });
}
