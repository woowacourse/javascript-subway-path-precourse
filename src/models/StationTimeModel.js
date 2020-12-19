import { stationTime } from '../utils/data.js';
import Dijkstra from '../utils/Dijkstra.js';

export default class StationTimeModel {
  constructor() {
    this.times = stationTime;
    this.dijkstra = new Dijkstra();
  }

  setTime() {
    this.times.forEach((station) => {
      this.dijkstra.addEdge(station.departureStation, station.endStation, station.time);
    });
  }

  getShortestTimePath(departureStation, endStation) {
    this.setTime();
    return this.dijkstra.findShortestPath(departureStation, endStation);
  }

  getTotalTime(path) {
    return path.reduce((totalTime, station, index) => {
      if (index !== path.length - 1) {
        totalTime += this.getOneTime(station, path[index + 1]);
      }
      return totalTime;
    }, 0);
  }

  getOneTime(departureStation, endStation) {
    return parseInt(
      this.times.find(
        (time) =>
          (time.departureStation === departureStation && time.endStation === endStation) ||
          (time.departureStation === endStation && time.endStation === departureStation)
      ).time
    );
  }
}
