import { DISTANCE, TIME } from '../../constants/constants.js';
import { SECTION_INFOS } from '../../data/subway.js';
import InputValidator from './input-validator.js';
import Dijkstra from '../../utils/Dijkstra.js';

export default class SubwayPath {
  constructor() {
    this._totalDistance;
    this._totalTime;
    this._path;
    this._shortestPathFinder = new Dijkstra();
    this.initializeEventListener();
  }

  initializeEventListener() {
    const targetNode = document.querySelector('#submit-container');
    targetNode.addEventListener('click', this.onClickSearchButton.bind(this));
  }

  onClickSearchButton(event) {
    const target = event.target;
    const validator = new InputValidator();
    const departure = document.querySelector('#departure-station-name-input');
    const arrival = document.querySelector('#arrival-station-name-input');
    if (
      target.id !== 'search-button' ||
      !validator.checkValidInputs(departure, arrival)
    ) {
      return;
    }
    this.setResult(departure.value, arrival.value);
    this.renderResult();
  }

  setResult(departure, arrival) {
    this.initializeFinder();
    this._path = this._shortestPathFinder.findShortestPath(departure, arrival);
    this.setTotal();
  }

  initializeFinder() {
    const radioDefault = document.querySelector('#shortest-distance');
    const key = radioDefault.checked ? DISTANCE : TIME;
    for (const section of SECTION_INFOS) {
      this._shortestPathFinder.addEdge(
        section.departure,
        section.arrival,
        section[key]
      );
    }
  }

  setTotal() {
    let distance = 0;
    let time = 0;
    for (let i = 0; i < this._path.length - 1; i++) {
      const departure = this._path[i];
      const arrival = this._path[i + 1];
      distance += this.getSectionInfo(departure, arrival, DISTANCE);
      time += this.getSectionInfo(departure, arrival, TIME);
    }

    this._totalDistance = distance;
    this._totalTime = time;
  }

  getSectionInfo(departure, arrival, key) {
    for (const section of SECTION_INFOS) {
      if (departure === section.departure && arrival === section.arrival) {
        return key === DISTANCE ? section.distance : section.time;
      }
    }
  }

  renderResult() {
    const resultContainer = document.querySelector('#result');
    resultContainer.innerHTML = this.createResultTitle();
    resultContainer.innerHTML += this.createResultTable();
  }

  createResultTitle() {
    const radioDefault = document.querySelector('#shortest-distance');
    const radioOther = document.querySelector('#minimum-time');

    return `<h2>결과</h2>
              <h3>${
                radioDefault.checked ? radioDefault.value : radioOther.value
              }</h3>
    `;
  }

  createResultTable() {
    return `<table id="result-table">
              <thead>
                <tr>
                  <th>총 거리</th>
                  <th>총 소요 시간</th>
                </tr>
              </thead>
            </table>`;
  }
}
