import { courses, stations } from '../../constants';
import Dijkstra from '../../utils/Dijkstra';

export default class SubwayPathModel {
  constructor() {
    this.stations = stations;
    this.courses = courses;
    this.startStation = null;
    this.endStation = null;

    this.dijkstraForShortestPath = new Dijkstra();
    this.dijkstraForMinimumTimePath = new Dijkstra();
  }

  getStations() {
    return this.stations;
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

  findShortestPath(startStation, endStation) {
    console.log(this.dijkstraForShortestPath.findShortestPath(startStation, endStation));

    const shortestPath = this.dijkstraForShortestPath.findShortestPath(startStation, endStation);
    const minimunTimePath = this.dijkstraForMinimumTimePath.findShortestPath(
      startStation,
      endStation,
    );
    this.calculateDistanceOfPath(shortestPath);
    this.calculateTimeOfPath(minimunTimePath);
  }

  findMinimumTimePath(startStation, endStation) {
    console.log(this.dijkstraForMinimumTimePath.findShortestPath(startStation, endStation));

    const minimunTimePath = this.dijkstraForMinimumTimePath.findShortestPath(
      startStation,
      endStation,
    );
  }

  calculateDistanceOfPath(shortestPath) {
    const endStation = shortestPath[shortestPath.length - 1];
    let nowStation = shortestPath[0];
    let nowStationIndex = 0;
    let costForDistance = 0;
    let costForTime = 0;

    return this.getCosts(
      endStation,
      nowStation,
      nowStationIndex,
      shortestPath,
      costForDistance,
      costForTime,
    );
  }

  getCosts(endStation, nowStation, nowStationIndex, minimunTimePath, costForDistance, costForTime) {
    while (nowStation !== endStation) {
      for (let i = 0; i < this.courses[nowStation].length; i++) {
        let [nextStatoin, distance, time] = this.courses[nowStation][i];
        if (nextStatoin === minimunTimePath[nowStationIndex + 1]) {
          costForTime += time;
          costForDistance += distance;
          nowStationIndex++;
          nowStation = minimunTimePath[nowStationIndex];
        }
      }
    }

    return [costForDistance, costForTime];
  }

  calculateTimeOfPath(minimunTimePath) {
    const endStation = minimunTimePath[minimunTimePath.length - 1];
    let nowStation = minimunTimePath[0];
    let nowStationIndex = 0;
    let costForDistance = 0;
    let costForTime = 0;

    return this.getCosts(
      endStation,
      nowStation,
      nowStationIndex,
      minimunTimePath,
      costForDistance,
      costForTime,
    );
  }

  findsAllKindOfPath(startStation, endStation) {
    this.findShortestPath(startStation, endStation);
    this.findMinimumTimePath(startStation, endStation);
  }
}
