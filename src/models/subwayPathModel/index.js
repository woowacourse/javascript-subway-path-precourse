import { courses, stations } from '../../constants';
import Dijkstra from '../../utils/Dijkstra';

export default class subwayPathModel {
  constructor() {
    this.stations = stations;
    this.courses = courses;
    this.startStation = null;
    this.endStation = null;

    this.dijkstraForShortestPath = new Dijkstra();
    this.dijkstraForMinimumTimePath = new Dijkstra();
  }

  getStartStation() {
    return this.startStation;
  }

  setStartStation(startStation) {
    this.startStation = startStation;
  }

  getEndStation() {
    return this.endStation;
  }

  setEndStation(endStation) {
    this.endStation = endStation;
  }

  setDataToDijkstraForShortestPath() {
    Object.entries(this.courses).forEach(course => {
      const [startStationName, endStations] = course;
      this.addEdgeToDijkstraForShortestPath(startStationName, endStations);
    });
  }

  addEdgeToDijkstraForShortestPath(startStationName, endStations) {
    endStations.forEach(endStation => {
      const [endStationName, distance, time] = endStation;
      this.dijkstraForShortestPath.addEdge(startStationName, endStationName, distance);
    });
  }

  setDataToDijkstraForMinimumTimePath() {
    Object.entries(this.courses).forEach(course => {
      const [startStationName, endStations] = course;
      this.addEdgeToDijkstraForMinimumTimePath(startStationName, endStations);
    });
  }

  addEdgeToDijkstraForMinimumTimePath(startStationName, endStations) {
    endStations.forEach(endStation => {
      const [endStationName, distance, time] = endStation;
      this.dijkstraForMinimumTimePath.addEdge(startStationName, endStationName, time);
    });
  }
}
