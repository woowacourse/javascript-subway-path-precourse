import Dijkstra from "../utils/Dijkstra.js";
import LinesModel from "./lines-model.js";

export default class Models {
  constructor(initialInput) {
    this._linesModel = new LinesModel(initialInput);
    this._distDijkstra = new Dijkstra();
    this._durationDijkstra = new Dijkstra();
    this.parseInitialInput(initialInput);
  }
  getMinDistance(departure, arrival) {
    const result = this._distDijkstra.findShortestPath(departure, arrival);
    const route = result.route;
    const duration = this._getDurationFromMinPath(route);
    return {
      distance: result.costs[arrival],
      duration: duration,
      route: result.route,
    };
  }
  getMinDuration(departure, arrival) {
    const result = this._durationDijkstra.findShortestPath(departure, arrival);
    const route = result.route;
    const distance = this._getDistanceFromMinPath(route);
    return {
      distance: distance,
      duration: result.costs[arrival],
      route: result.route,
    };
  }

  parseInitialInput(lines) {
    lines.forEach((line) => {
      this._parseToDistDijkstra({
        stationsOfLine: line.stationsOfLine,
        distanceWeight: line.distanceWeight,
      });
      this._parseToDurationDijkstra({
        stationsOfLine: line.stationsOfLine,
        durationWeight: line.durationWeight,
      });
    });
  }

  _getDurationFromMinPath(route) {
    let duration = 0;
    for (let i = 0; i < route.length - 1; i++) {
      const departure = route[i];
      const arrival = route[i + 1];
      const result = this._durationDijkstra.findShortestPath(
        departure,
        arrival
      );
      duration += result.costs[arrival];
      console.log(result);
    }
    return duration;
  }
  _getDistanceFromMinPath(route) {
    let distance = 0;
    for (let i = 0; i < route.length - 1; i++) {
      const departure = route[i];
      const arrival = route[i + 1];
      const result = this._distDijkstra.findShortestPath(departure, arrival);
      distance += result.costs[arrival];
      console.log(result);
    }
    return distance;
  }
  _parseToDistDijkstra({ stationsOfLine, distanceWeight }) {
    for (let i = 0; i < distanceWeight.length; i++) {
      this._distDijkstra.addEdge(
        stationsOfLine[i],
        stationsOfLine[i + 1],
        distanceWeight[i]
      );
    }
  }
  _parseToDurationDijkstra({ stationsOfLine, durationWeight }) {
    for (let i = 0; i < durationWeight.length; i++) {
      this._durationDijkstra.addEdge(
        stationsOfLine[i],
        stationsOfLine[i + 1],
        durationWeight[i]
      );
    }
  }
}
