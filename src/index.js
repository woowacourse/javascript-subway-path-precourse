import { stationDistanceKMMap, stationMinuteMap } from "./utils/data.js";
import { getDepartureStationName, getArrivalStationName, getSearchType, setBtnGetDirection } from "./dom.js";
import { stationNameValidation } from "./validation.js";
export default class subwayGetDirection {
  constructor() {
    this.stationDistanceMap = stationDistanceKMMap;
    this.stationMinuteMap = stationMinuteMap;
    this.init();
  }
  init() {
    setBtnGetDirection(this.getDirection);
  }
  getDirection(e) {
    e.preventDefault();
    const startStationName = getDepartureStationName();
    const endStationName = getArrivalStationName();
    const result = stationNameValidation([startStationName, endStationName]);
  }
}

new subwayGetDirection();
