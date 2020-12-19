import { stations, lines, sections } from './data.js';
import Dijkstra from './utils/Dijkstra.js';
import ViewController from './view.js';
import { isStationsValid, isPathValid } from './valid.js';

const SHORTEST_DISTANCE = '최단거리';
const SHORTEST_TIME = '최소시간';
const RESULT_ARROW = '→';
const CHECKED_RADIO_BUTTON = 'input[name="search-type"]:checked';

const departureInput = document.getElementById('departure-station-name-input');
const arrivalInput = document.getElementById('arrival-station-name-input');
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

  // 역 이름 문자열만 빼내서 배열로 만듦
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
    const departure = departureInput.value;
    const arrival = arrivalInput.value;
    const searchType = document.querySelector(CHECKED_RADIO_BUTTON).value;
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
      const pathIndex = this.getSectionIndex(this.sections, path, i);
      totalDistance += this.sections[pathIndex].distance;
      totalTime += this.sections[pathIndex].time;
    }
    return {
      pathString: path.join(RESULT_ARROW),
      totalDistance,
      totalTime,
    };
  }

  // 데이터에서 원하는 구간을 찾아낸다.
  getSectionIndex(sections, path, index) {
    return sections.findIndex(
      section =>
        section.stations.includes(path[index]) &&
        section.stations.includes(path[index - 1])
    );
  }
}

new SubwayPath();
