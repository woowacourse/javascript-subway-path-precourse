import Station from './Station.js';

export default class StationModel {
  constructor() {
    this.stations = [];
  }

  createStation(id, stationName, lineNumber) {
    const station = new Station(id, stationName);
    station.setLine(lineNumber);
    this.stations.push(station);
  }

  getStationByName(stationName) {
    return this.stations.find((station) => station.name === stationName);
  }

  getStationNames() {
    return this.stations.map((station) => station.name);
  }

  addLIne(stationName, stationLine) {
    this.getStationByName(stationName).setLine(stationLine);
  }
}
