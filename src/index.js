import { stationDistanceList, stationMinuteList } from "./utils/data.js";
import { getDepartureStationName, getArrivalStationName, getSearchType, setBtnGetDirection } from "./dom.js";
import { stationNameValidation } from "./validation.js";
import Dijkstra from "./utils/Dijkstra.js";

export default class subwayGetDirection {
  constructor() {
    this.stationDistanceList = stationDistanceList;
    this.stationMinuteList = stationMinuteList;
    this.searchType = null;
    this.startStation = null;
    this.endStation = null;
    this.route = [];
    this.init();
  }
  init() {
    setBtnGetDirection(this.getDirection.bind(this));
  }
  startDijkstra(data) {
    const dijkstra = new Dijkstra();
    data.forEach(([start, end, weight]) => dijkstra.addEdge(start, end, weight));
    this.route = dijkstra.findShortestPath(this.startStation, this.endStation);
  }
  getDirection(e) {
    e.preventDefault();
    this.startStation = getDepartureStationName();
    this.endStation = getArrivalStationName();
    if (!stationNameValidation([this.startStation, this.endStation])) {
      return;
    }
    this.searchType = getSearchType();
    if (this.searchType === "distance") {
      this.startDijkstra(this.stationDistanceList);
    }
    if (this.searchType === "time") {
      this.startDijkstra(this.stationMinuteList);
    }
  }
}

new subwayGetDirection();
