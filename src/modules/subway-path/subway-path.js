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
    const targetNode = document.querySelector('#search-button');
    targetNode.addEventListener('click', this.onClickSearchButton.bind(this));
  }

  onClickSearchButton() {
    const validator = new InputValidator();
    const departure = document.querySelector('#departure-station-name-input');
    const arrival = document.querySelector('#arrival-station-name-input');
    if (validator.checkValidInputs(departure, arrival)) {
      this.setPath(departure.value, arrival.value);
      this.setTotals();
      this.renderResult();
    }
    this.clear(departure, arrival);
  }

  setPath(departure, arrival) {
    this.initializeFinder();
    this._path = this._shortestPathFinder.findShortestPath(departure, arrival);
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

  setTotals() {
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
    this.renderPath();
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

  renderPath() {
    const table = document.querySelector('#result-table');

    table.innerHTML += `<tbody>
                          <tr>
                            <td>${this._totalDistance}km</td>
                            <td>${this._totalTime}분</td>
                          </tr>
                          <tr>
                            <td colspan="2">${this._path.join('⮕')}</td>
                          </tr>
                        </tbody>`;
  }

  clear(departure, arrival) {
    departure.value = '';
    arrival.value = '';
    departure.focus();
  }
}
