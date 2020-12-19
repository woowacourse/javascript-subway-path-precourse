import { stationDistanceList, stationMinuteList, stationDistanceMap, stationMinuteMap } from "./utils/data.js";
import { getDepartureStationName, getArrivalStationName, getSearchType, setBtnGetDirection, createHeader, createTable } from "./dom.js";
import { stationNameValidation } from "./validation.js";
import { constant } from "./utils/const.js";
import Dijkstra from "./utils/Dijkstra.js";

const { HEADER_RESULT, MIN_DISTANCE, MIN_TIME } = constant;

export default class subwayGetDirection {
  constructor() {
    this.stationDistanceList = stationDistanceList;
    this.stationMinuteList = stationMinuteList;
    this.stationDistanceMap = stationDistanceMap;
    this.stationMinuteMap = stationMinuteMap;
    this.searchType = null;
    this.startStation = null;
    this.endStation = null;
    this.route = [];
    this.init();
  }
  init() {
    setBtnGetDirection(this.getDirection.bind(this));
  }
  getDistanceInRoute() {
    let distance = 0;
    for (let start = 0; start < this.route.length - 1; start++) {
      distance += this.stationDistanceMap[this.route[start]][this.route[start + 1]];
    }
    return distance;
  }
  getMinuteInRoute() {
    let minute = 0;
    for (let start = 0; start < this.route.length - 1; start++) {
      minute += this.stationMinuteMap[this.route[start]][this.route[start + 1]];
    }
    return minute;
  }
  startDijkstra(data) {
    const dijkstra = new Dijkstra();
    data.forEach(([start, end, weight]) => dijkstra.addEdge(start, end, weight));
    this.route = dijkstra.findShortestPath(this.startStation, this.endStation);
  }
  drawTable() {
    const $divResult = document.querySelector("#result");
    $divResult.innerHTML = ``;
    const distanceResult = this.getDistanceInRoute();
    const minuteResult = this.getMinuteInRoute();
    const routeResult = this.route;
    const $table = createTable(distanceResult, minuteResult, routeResult);
    const $headerH1 = createHeader("h1", HEADER_RESULT);
    const $headerH3 = createHeader("h3", this.searchType);
    $divResult.append($headerH1, $headerH3, $table);
  }
  getDirection(e) {
    e.preventDefault();
    this.startStation = getDepartureStationName();
    this.endStation = getArrivalStationName();
    if (!stationNameValidation([this.startStation, this.endStation])) {
      return;
    }
    this.searchType = getSearchType();
    if (this.searchType === MIN_DISTANCE) {
      this.startDijkstra(this.stationDistanceList);
    }
    if (this.searchType === MIN_TIME) {
      this.startDijkstra(this.stationMinuteList);
    }

    this.drawTable();
  }
}

new subwayGetDirection();
