import { stations } from './data.js';

export default class Model {
  constructor() {
    // TODO: data 가져와서 초기화
    this.stations = stations;
  }

  includeStation(station) {
    return this.stations.includes(station); 
  }
}
