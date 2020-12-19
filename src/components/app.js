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
    this.#searchResult = new ComputedState(() => this.searchPath(), [
      this.#searchRequest,
    ]);
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
