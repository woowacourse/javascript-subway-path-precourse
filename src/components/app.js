import Component from '../core/component.js';
import ComputedState from '../core/computed-state.js';
import State from '../core/state.js';
import { lines } from '../data/lines.js';
import { stations } from '../data/stations.js';
import Dijkstra from '../utils/Dijkstra.js';
import RouteInput from './route-input.js';
import RouteResult from './route-result.js';

class App extends Component {
  #searchRequest;
  #stations;
  #lines;
  #searchResult;

  constructor($target) {
    super($target);
    this.initializeStates();
    this.render();
  }

  initializeStates() {
    this.#searchRequest = new State(null);
    this.#lines = lines;
    this.#stations = stations;
    this.#searchResult = new ComputedState(() => this.getSearchResult(), [
      this.#searchRequest,
    ]);
  }

  getSearchResult() {
    if (!this.#searchRequest.value) {
      return {};
    }
    const resultPath = this.searchPath();
    let { totalTime, totalDistance } = this.getTotalTimeAndDistance(resultPath);

    console.log(totalTime, totalDistance, resultPath);
    return { resultPath, totalTime, totalDistance };
  }

  searchPath() {
    if (!this.#searchRequest.value) {
      return '';
    }
    const {
      departureStation,
      arrivalStation,
      searchType,
    } = this.#searchRequest?.value;
    const dijkstra = this.initializeDijkstra(searchType);

    return dijkstra.findShortestPath(departureStation, arrivalStation);
  }

  initializeDijkstra(searchType) {
    const dijkstra = new Dijkstra();
    this.#lines.forEach(line =>
      line.sections.forEach(section => {
        const { departureStation, arrivalStation, distance, time } = section;
        const priority = searchType === 'distance-first' ? distance : time;
        dijkstra.addEdge(departureStation, arrivalStation, priority);
      })
    );

    return dijkstra;
  }

  getTotalTimeAndDistance(path) {
    let totalTime = 0;
    let totalDistance = 0;
    let section;
    for (let i = 0; i < path.length - 1; i++) {
      section = this.findSection({
        targetDepartureStation: path[i],
        targetArrivalStation: path[i + 1],
      });
      totalTime += section?.time;
      totalDistance += section?.distance;
    }

    return { totalTime, totalDistance };
  }

  findSection(target) {
    let section = null;
    this.#lines.forEach(line => {
      let foundSection = line.sections.find(
        section =>
          section.departureStation === target.targetDepartureStation &&
          section.arrivalStation === target.targetArrivalStation
      );
      if (foundSection) {
        section = foundSection;
      }
    });

    return section;
  }

  mountTemplate() {
    this._$target.innerHTML = `
      <h1>🚇 지하철 노선도 관리</h1>
      <section id="route-input-container"></section>
      <section id="route-result-container"></section>
    `;
  }

  mountComponents() {
    const $RouteInputContainer = document.querySelector(
      '#route-input-container'
    );
    const $routeResultContainer = document.querySelector(
      '#route-result-container'
    );
    const searchRequest = this.#searchRequest;
    const stations = this.#stations;
    new RouteInput($RouteInputContainer, { searchRequest, stations });
    new RouteResult($routeResultContainer, { searchRequest });
  }
}

export default App;
