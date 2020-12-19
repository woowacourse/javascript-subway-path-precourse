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

  addLIne(stationName, stationLine) {
    this.getStationByName(stationName).setLine(stationLine);
  }

  getStations() {
    return this.stations;
  }
}
