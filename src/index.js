import { stationDistanceKMMap, stationMinuteMap } from "./utils/data.js";

export default class subwayGetDirection {
  constructor() {
    this.stationDistanceMap = stationDistanceKMMap;
    this.stationMinuteMap = stationMinuteMap;
  }
  init() {}
}
