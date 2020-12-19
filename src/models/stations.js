import Dijkstra from '../utils/Dijkstra.js';
import { stationsDistance, stationsTime } from './stationsInitialData.js';

export default class Stations {
  constructor() {
    this.stations = [];

    this.getStations();
  }

  getStations() {
    for (let i = 0; i < stationsDistance.length; i++) {
      this.stations.push(stationsDistance[i].start);
      this.stations.push(stationsDistance[i].end);
    }

    this.stations = [...new Set(this.stations)];
  }
}
