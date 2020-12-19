import { stationDistance } from '../utils/data.js';
import Dijkstra from '../utils/Dijkstra.js';

export default class StationDistanceModel {
  constructor() {
    this.distances = stationDistance;
    this.dijkstra = new Dijkstra();
  }

  setDistance() {
    this.distances.forEach((station) => {
      this.dijkstra.addEdge(station.departureStation, station.endStation, station.distance);
    });
  }

  getShortestDistancePath(departureStation, endStation) {
    this.setDistance();
    // todo 연결되지 않은 곳일 때 예외처리
    return this.dijkstra.findShortestPath(departureStation, endStation);
  }

  getTotalDistance(path) {
    return path.reduce((totalDistance, station, index) => {
      if (index !== path.length - 1) {
        totalDistance += this.getOneDistance(station, path[index + 1]);
      }
      return totalDistance;
    }, 0);
  }

  getOneDistance(departureStation, endStation) {
    return parseInt(
      this.distances.find(
        (time) =>
          (time.departureStation === departureStation && time.endStation === endStation) ||
          (time.departureStation === endStation && time.endStation === departureStation)
      ).distance
    );
  }
}
