import { stationsDistance, stationsTime } from './stationsInitialData.js';

export default class Stations {
  constructor() {
    this.stations = [];
    this.stationsDistance = stationsDistance;
    this.stationsTime = stationsTime;

    this.getStations();
  }

  getStations() {
    stationsDistance.forEach((station) => {
      this.stations.push(station.start);
      this.stations.push(station.end);
    });

    // 중복제거
    this.stations = [...new Set(this.stations)];
  }

  addDijkstraEdgeDistance(dijkstra) {
    this.stationsDistance.forEach((station) => {
      dijkstra.addEdge(station.start, station.end, station.distance);
    });
  }

  addDijkstraEdgeTime(dijkstra) {
    this.stationsTime.forEach((station) => {
      dijkstra.addEdge(station.start, station.end, station.time);
    });
  }
}
