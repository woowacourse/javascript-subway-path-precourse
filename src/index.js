import { stationDistanceKMMap, stationMinuteMap } from "./utils/data.js";
import { getSearchType } from "./dom.js";

export default class subwayGetDirection {
  constructor() {
    this.stationDistanceMap = stationDistanceKMMap;
    this.stationMinuteMap = stationMinuteMap;
    this.init();
  }
  init() {}
}

new subwayGetDirection();
