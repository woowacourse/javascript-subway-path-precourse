import { lineInfo } from "./line-info.js";
import { notExistingRoute } from "./exception-handling.js";

export function FindRoute(departureStation, arrivalStation, dijkstra) {
  this.departureStation = departureStation;
  this.arrivalStation = arrivalStation;
  this.dijkstra = dijkstra;
  this.route = this.dijkstra.findShortestPath(
    this.departureStation,
    this.arrivalStation
  );
  this.getOneDistanceAndTime = (startStation, endStation) => {
    for (let i in lineInfo) {
      const line = lineInfo[i];
      for (let idx = 0; idx < line.stationList.length - 1; idx++) {
        if (
          startStation === line.stationList[idx] &&
          endStation === line.stationList[idx + 1]
        ) {
          return [line.distanceInfo[idx], line.timeInfo[idx]];
        }
      }
      for (let idx = 1; idx < line.stationList.length; idx++) {
        if (
          startStation === line.stationList[idx] &&
          endStation === line.stationList[idx - 1]
        ) {
          return [line.distanceInfo[idx - 1], line.timeInfo[idx - 1]];
        }
      }
    }

    return [0, 0];
  };
  this.getTotalDistance = () => {
    let totalDistance = 0;
    for (let i = 0; i < this.route.length - 1; i++) {
      const res = this.getOneDistanceAndTime(
        this.route[i],
        this.route[i + 1]
      )[0];
      if (res !== 0) {
        totalDistance += res;
      } else {
        notExistingRoute();
      }
    }

    return totalDistance;
  };
  this.getTotalTime = () => {
    let totalTime = 0;
    for (let i = 0; i < this.route.length - 1; i++) {
      const res = this.getOneDistanceAndTime(
        this.route[i],
        this.route[i + 1]
      )[1];
      if (res !== 0) {
        totalTime += res;
      } else {
        notExistingRoute();
      }
    }

    return totalTime;
  };
  this.getRoute = () => {
    const shortestRoute = this.dijkstra.findShortestPath(
      this.departureStation,
      this.arrivalStation
    );

    return shortestRoute.join(" => ");
  };
}
