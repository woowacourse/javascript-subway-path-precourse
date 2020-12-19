import { stations, lines, sections } from './data.js';
import Dijkstra from './utils/Dijkstra.js';
import ViewController from './view.js';
import { isStationsValid, isPathValid } from './valid.js';

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
    this.sections = sections;
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
    this.sections.forEach(section => {
      distanceDijkstra.addEdge(
        section.stations[0],
        section.stations[1],
        section.distance
      );
      timeDijkstra.addEdge(
        section.stations[0],
        section.stations[1],
        section.time
      );
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
      const path = this.findPath(departure, arrival, searchType);
      isStationsValid(this.stations, departure, arrival);
      isPathValid(path);
      const result = this.calculatePathResult(path);
      this.viewController.showResults(result, searchType);
    } catch (error) {
      alert(error);
      this.viewController.clearStationInputs();
    }
  }

  findPath(departure, arrival, searchType) {
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
      const pathIndex = this.sections.findIndex(
        section =>
          section.stations.includes(path[i]) &&
          section.stations.includes(path[i - 1])
      );
      totalDistance += this.sections[pathIndex].distance;
      totalTime += this.sections[pathIndex].time;
    }
    return {
      pathString: path.join(RESULT_ARROW),
      totalDistance,
      totalTime,
    };
  }
}

new SubwayPath();
