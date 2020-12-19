import { stationDistanceKMMap, stationMinuteMap } from "./utils/data.js";
import { getDepartureStationName, getArrivalStationName, getSearchType, setBtnGetDirection } from "./dom.js";
import { stationNameValidation } from "./validation.js";
export default class subwayGetDirection {
  constructor() {
    this.stationDistanceMap = stationDistanceKMMap;
    this.stationMinuteMap = stationMinuteMap;
    this.searchType = null;
    this.init();
  }
  init() {
    setBtnGetDirection(this.getDirection.bind(this));
  }
  getDirection(e) {
    e.preventDefault();
    const startStationName = getDepartureStationName();
    const endStationName = getArrivalStationName();
    if (!stationNameValidation([startStationName, endStationName])) {
      return;
    }
    this.searchType = getSearchType();
  }
}

new subwayGetDirection();
