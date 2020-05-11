import {City} from "./City";

export class Trip {
  private id: string;
  private cities: City[];
  private activeCityId: string;

  constructor(data) {
    this.id = data.id || '';
    this.cities = data.cities || [];
    this.activeCityId = data.activeCityId || '';
  }
}
