import {City} from "../models/City";
import axios from 'axios';
import Promise from 'promise';

export class CitySuggestions {
  public static byCoordinates(longitude, latitude): Promise<City> {
    return new Promise((resolve, reject) => {
      axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?types=place&access_token=pk.eyJ1IjoiaGF5ZGVlbXVub3oiLCJhIjoiY2pjbDhlaHFmMDR2ejMycXE0cng1dTR3bCJ9.0TAB6eibuUih8GaLPvaIpA`)
        .then(function (response) {
          if (response.data && response.data.features && response.status === 200) {
            const cities = response.data.features.map((city) => ({
              name: city.matching_place_name ? city.matching_place_name : city.place_name ,
              coordinates: {
                lat: city.geometry.coordinates[0],
                lng: city.geometry.coordinates[1]
              }
            }));
            resolve(cities[0]);
          }
        })
        .catch(function (error) {
          console.log('error in catch');
          reject(error);
        })
    });
  }

  public static byName(searchText) {
    return new Promise((resolve, reject) => {
      axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${searchText}.json?types=place&access_token=pk.eyJ1IjoiaGF5ZGVlbXVub3oiLCJhIjoiY2pjbDhlaHFmMDR2ejMycXE0cng1dTR3bCJ9.0TAB6eibuUih8GaLPvaIpA`)
        .then(function (response) {
          const cities = [];

          response.data.features.map((city) => {
            cities.push(new City({
              name: city.matching_place_name || city.place_name,
              coordinates: {
                lat: city.geometry.coordinates[0],
                lng: city.geometry.coordinates[1]
              }
            }));
          });

          resolve(cities);
        })
        .catch(function (error) {
          if (axios.isCancel(error)) {
            console.log('Request canceled', error.message);
          } else {
            reject(error);
          }
        })
    });
  }
}
