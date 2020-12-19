import { stations, lines } from "./subway-map-data.js";
import Dijkstra from "./utils/Dijkstra.js";

const WEIGHT_TYPE_DISTANCE = 0;
const WEIGHT_TYPE_TRAVEL_TIME = 1;

export default class SubwayMap {
  constructor() {
    this.stationsGraph = new Map();
    this.dijkstraForDistance = new Dijkstra();
    this.dijkstraForTravelTime = new Dijkstra();

    this.fillStationsGraph(stations);
    this.constructStationsGraph(lines);
    this.constructDijkstraByWeightType(WEIGHT_TYPE_DISTANCE);
    this.constructDijkstraByWeightType(WEIGHT_TYPE_TRAVEL_TIME);
  }

  fillStationsGraph(stationsArray) {
    stationsArray.forEach((_station) => this.stationsGraph.set(_station, {}));
  }

  constructStationsGraph(linesArray) {
    linesArray.forEach((_line) => {
      for (let i = 0; i < _line.section.length - 1; i++) {
        this.addBothwayRouteIntoStationsGraph(
          _line.section[i],
          _line.section[i + 1],
          _line.sectionDistance[i],
          _line.sectionTravelTime[i]
        );
      }
    });
  }

  addBothwayRouteIntoStationsGraph(begin, end, distance, travelTime) {
    this.addRouteIntoStationsGraph(begin, end, distance, travelTime);
    this.addRouteIntoStationsGraph(end, begin, distance, travelTime);
  }

  addRouteIntoStationsGraph(begin, end, distance, travelTime) {
    this.stationsGraph.set(begin, {
      ...this.stationsGraph.get(begin),
      [end]: [distance, travelTime],
    });
  }

  constructDijkstraByWeightType(weightType) {
    this.stationsGraph.forEach((_linkedStations, _currentStation) => {
      this.addStationsAsEdgeWithSpecifiedWeight(
        _currentStation,
        _linkedStations,
        weightType
      );
    });
  }

  addStationsAsEdgeWithSpecifiedWeight(
    currentStation,
    linkedStations,
    weightType
  ) {
    const djikstra =
      weightType === WEIGHT_TYPE_DISTANCE
        ? this.dijkstraForDistance
        : this.dijkstraForTravelTime;
    Object.entries(linkedStations).forEach((_linkedStation) => {
      djikstra.addEdge(
        currentStation,
        _linkedStation[0],
        _linkedStation[1][weightType]
      );
    });
  }

  getShortestPathForDistance(departureStation, arrivalStation) {
    return this.dijkstraForDistance.findShortestPath(
      departureStation,
      arrivalStation
    );
  }

  getShortestPathForTrevelTime(departureStation, arrivalStation) {
    return this.dijkstraForTravelTime.findShortestPath(
      departureStation,
      arrivalStation
    );
  }

  getPathSumByWeightType(path, weightType) {
    let sum = 0;
    for (let i = 0; i < path.length - 1; i++) {
      sum += this.stationsGraph.get(path[i])[path[i + 1]][weightType];
    }
    return sum;
  }

  getDistanceSum(path) {
    return this.getPathSumByWeightType(path, WEIGHT_TYPE_DISTANCE);
  }

  getTravelTimeSum(path) {
    return this.getPathSumByWeightType(path, WEIGHT_TYPE_TRAVEL_TIME);
  }

  hasStation(station) {
    return this.stationsGraph.has(station);
  }
}
