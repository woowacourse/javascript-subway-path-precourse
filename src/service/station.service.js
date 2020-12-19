import { stations } from "../data/station.js";

export default class StationService {
  constructor() {
    this.stations = stations;
    this.MIN_STATION_NAME_LENGTH = 2;
  }

  findByName(stationName) {
    const station = this.stations.filter((station) => {
      return station.name === stationName;
    });

    return station;
  }
}
