import { stationDistanceList, stationMinuteList, stationDistanceMap, stationMinuteMap } from "./utils/data.js";
import { getDepartureStationName, getArrivalStationName, getSearchType, setBtnGetDirection, createTableHeader } from "./dom.js";
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
  getWeightInRoute(type) {}
  startDijkstra(data) {
    const dijkstra = new Dijkstra();
    data.forEach(([start, end, weight]) => dijkstra.addEdge(start, end, weight));
    this.route = dijkstra.findShortestPath(this.startStation, this.endStation);
  }
  drawTable() {
    const $divResult = document.querySelector("#result");
    $divResult.innerHTML = `
    <h3>${this.searchType}</h3>
    <table border="1">
      <tr>
        <th>총 거리</th>
        <th>총 소요시간</th>
      </tr>
      <tr>
        <td>총 거리</td>
        <td>총 소요시간</td>
      </tr>
      <tr>
        <td colspan="2">길이</td>
      </tr>
    </table>
    `;
    const tabelHeader = createTableHeader();
    $divResult.prepend(tabelHeader);
  }
  getDirection(e) {
    e.preventDefault();
    this.startStation = getDepartureStationName();
    this.endStation = getArrivalStationName();
    if (!stationNameValidation([this.startStation, this.endStation])) {
      return;
    }
    this.searchType = getSearchType();
    if (this.searchType === "최단거리") {
      this.startDijkstra(this.stationDistanceList);
    }
    if (this.searchType === "최단시간") {
      this.startDijkstra(this.stationMinuteList);
    }
    this.drawTable();
  }
}

new subwayGetDirection();
