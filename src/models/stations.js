import { stationsDistance } from './stationsInitialData.js';

export default class Stations {
  constructor() {
    this.stations = [];

    this.getStations();
  }

  getStations() {
    stationsDistance.forEach((station) => {
      this.stations.push(station.start);
      this.stations.push(station.end);
    });

    // 중복제거
    this.stations = [...new Set(this.stations)];
  }
}
