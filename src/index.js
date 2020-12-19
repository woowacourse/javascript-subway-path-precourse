import { stations, lines, routes } from './data.js';
import Dijkstra from './utils/Dijkstra.js';
import ViewController from './view.js';
import { isStationNamesValid, isPathValid } from './valid.js';

const SHORTEST_DISTANCE = '최단거리';
const SHORTEST_TIME = '최소시간';
const RESULT_ARROW = '→';
const departureStationNameInput = document.getElementById(
  'departure-station-name-input'
);
const arrivalStationNameInput = document.getElementById(
  'arrival-station-name-input'
);
const searchButton = document.getElementById('search-button');

export default class SubwayPath {
  constructor() {
    this.stations = this.getStationsArray(stations);
    this.lines = lines;
    this.routes = routes;
    this.viewController = new ViewController();
    [this.distanceDijkstra, this.timeDijkstra] = this.createDijkstras();
    this.setEventListeners();
  }

  setEventListeners() {
    searchButton.addEventListener('click', this.clickSearchButton.bind(this));
  }

  getStationsArray(stations) {
    return stations.map(station => station.name);
  }

  createDijkstras() {
    const distanceDijkstra = new Dijkstra();
    const timeDijkstra = new Dijkstra();
    this.routes.forEach(route => {
      distanceDijkstra.addEdge(
        route.stations[0],
        route.stations[1],
        route.distance
      );
      timeDijkstra.addEdge(route.stations[0], route.stations[1], route.time);
    });
    return [distanceDijkstra, timeDijkstra];
  }

  clickSearchButton() {
    const departure = departureStationNameInput.value;
    const arrival = arrivalStationNameInput.value;
    const searchType = document.querySelector(
      'input[name="search-type"]:checked'
    ).value;
    try {
      const path = this.findPathByDijkstra(departure, arrival, searchType);
      isStationNamesValid(this.stations, departure, arrival);
      isPathValid(path);
      const result = this.calculatePathResult(path);
      this.viewController.clearResultDiv();
      this.viewController.printSearchResult(result, searchType);
    } catch (error) {
      alert(error);
      this.viewController.clearStationInputs();
    }
  }

  findPathByDijkstra(departure, arrival, searchType) {
    if (searchType === SHORTEST_DISTANCE) {
      return this.distanceDijkstra.findShortestPath(departure, arrival);
    } else if (searchType === SHORTEST_TIME) {
      return this.timeDijkstra.findShortestPath(departure, arrival);
    }
  }

  calculatePathResult(path) {
    let totalDistance = 0;
    let totalTime = 0;
    for (let i = 1; i < path.length; i++) {
      const pathIndex = this.routes.findIndex(
        route =>
          route.stations.includes(path[i]) &&
          route.stations.includes(path[i - 1])
      );
      totalDistance += this.routes[pathIndex].distance;
      totalTime += this.routes[pathIndex].time;
    }
    return {
      pathString: path.join(RESULT_ARROW),
      totalDistance,
      totalTime,
    };
  }
}

new SubwayPath();
