import {Addresses} from "../helpers/Addresses";

const uuidv4 = require("uuid/v4");
const randomColor = require('randomcolor');
import moment from 'moment';

export interface ICityCoordinates {
  lng: number;
  lat: number;
}
export class City {
  public name: string;
  public endDate: string;
  public startDate: string;
  public id: string;
  public coordinates: ICityCoordinates;
  public color: string;

  constructor(data?) {
    this.name = (data || {}).name || '';
    this.startDate = (data || {}).startDate || moment().format();
    this.endDate = (data || {}).endDate || moment().add(1, 'days').format();
    this.id = (data || {}).id || uuidv4();
    this.coordinates = {...(data || {}).coordinates} || {};
    this.color = (data || {}).color || null;
  }

  public generateColor(index: number): void {

    if (!this.color) {
      if (index % 2) {
        this.color = randomColor({
          luminosity: 'bright',
          hue: 'red'
        });
      } else if (index % 3) {
        this.color =  randomColor({
          luminosity: 'bright',
          hue: 'orange'
        });
      } else {
        this.color =  randomColor({
          luminosity: 'bright',
          hue: 'blue'
        });
      }
    }
  }

  public normalize() {
    return {
      id: this.id,
      color: this.color,
      startDate: this.startDate,
      endDate: this.endDate,
      name: this.name,
      coordinates: this.coordinates
    }
  }

  public parseCityObject(cityObject) {
    let city: City = new City();
    let address_components = cityObject.address_components;

    address_components.forEach(function(component) {
      if (Addresses.isComponentValid(component)) {
        let componentType = Addresses.getComponentType(component);
        city[componentType] = component.long_name;
      }
    });

    city.coordinates = cityObject.geometry.location;

    return city;
  }
}
