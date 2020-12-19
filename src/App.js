import * as Data from './Data.js';
import { 
  NAME_INCLUDE_EMPTY_ERROR,
  NAME_LESS_THEN_TWO_ERROR,
  NAME_NOT_EQUAL_ERROR,
  NAME_NOT_EXIST_ERROR,
} from './constants/ErrorConstants.js';
import getDistanceAndTime from './utils/getWeight.js';
import Result from './Result.js';

export default class App {
  initialState = {
    searchType: '최단거리',
    shortestPath: [],
    totalDistance: '',
    totalTime: '',
  }

  constructor(target) {
    this.target = target;
    this.state = this.initialState;
    this.fetchData();

    this.createHeader(target);
    this.createStationInput(target);
    this.createRadioButton(target);
    this.createSearchButton(target);

    this.resultContainer = this.createContainer(target, 'result');
  }

  createContainer(target, className = '') {
    const container = document.createElement('div');
    if(className) {
      container.className = className
    }
    target.appendChild(container);
    return container;
  }

  fetchData() {
    this.shortestDistanceDijkstra = Data.fetchShortestDistanceDijkstra();
    this.shortestTimeDijkstra = Data.fetchShortestTimeDijkstra();
  }

  createHeader(target) {
    const header = document.createElement('header');
    header.innerHTML = `<h1>🚇 지하철 길찾기</h1>`;
    target.appendChild(header);
  }

  createStationInput(target) {
    const container = this.createContainer(target, 'station-input');
    container.innerHTML = `
      <div class="departure-station">
        <label for="departure">출발역</label>
        <input
          type="text"
          name="departure"
          id="departure-station-name-input"
        />
      </div>
      <div class="arrival-station">
        <label for="arrival">도착역</label>
        <input
          type="text"
          name="arrival"
          id="arrival-station-name-input"
        />
      </div>
    `;
  }

  createRadioButton(target) {
    const container = this.createContainer(target, 'radio-button');
    container.innerHTML = `
      <label>
        <input
          type="radio"
          name="search-type"
          value="최단거리"
          checked
        /> 최단거리
      </label>
      <label>
        <input 
          type="radio"
          name="search-type"
          value="최소시간"
        /> 최소시간
      </label>
    `;
  }

  createSearchButton(target) {
    const { setState, createContainer } = this;
    const container = createContainer(target, 'search');
    container.innerHTML = `<button id="search-button">길찾기</button>`;

    const addButton = document.querySelector('#search-button');
    addButton.addEventListener('click', setState.bind(this));
  }

  isLessThenTwo(name) {
    return name.length >= 2;
  }

  isIncludeStation(name) {
    return Data.stations.includes(name);
  }

  isIncludeSpace(name) {
    return /\s/g.test(name);
  }

  isEqual(startStation, endStation) {
    return startStation === endStation;
  }

  isPossible(startStation, endStation) {
    const { isIncludeSpace, isLessThenTwo, isIncludeStation, isEqual } = this;
    if(isIncludeSpace(startStation) || isIncludeSpace(endStation)) {
      return alert(NAME_INCLUDE_EMPTY_ERROR);
    }
    if(!isLessThenTwo(startStation) || !isLessThenTwo(endStation)) {
      return alert(NAME_LESS_THEN_TWO_ERROR);
    }
    if(isEqual(startStation, endStation)) {
      return alert(NAME_NOT_EQUAL_ERROR);
    }
    if(!isIncludeStation(startStation) || !isIncludeStation(endStation)) {
      return alert(NAME_NOT_EXIST_ERROR);
    }
    return true;
  }

  getShortestPath(searchType, startStation, endStation) {
    let shortestPath;
    if(searchType === '최단거리') {
      shortestPath = this.shortestDistanceDijkstra.findShortestPath(startStation, endStation);
    }
    else {
      shortestPath = this.shortestTimeDijkstra.findShortestPath(startStation, endStation);
    }
    return shortestPath;
  }

  setState() {
    const startStation = document.querySelector('#departure-station-name-input').value;
    const endStation = document.querySelector('#arrival-station-name-input').value;
    const searchType = document.querySelector('input[name="search-type"]:checked').value;
    if(!this.isPossible(startStation, endStation)) {
      return;
    }
    const shortestPath = this.getShortestPath(searchType, startStation, endStation);
    const { totalDistance, totalTime } = getDistanceAndTime(shortestPath);
    this.state = { searchType, shortestPath, totalDistance, totalTime }
    this.renderResult();
  }

  renderResult() {
    const { searchType, shortestPath, totalDistance, totalTime } = this.state;
    this.resultContainer.innerHTML = ``;

    return new Result(this.resultContainer, {
      searchType,
      shortestPath,
      totalDistance,
      totalTime,
    })
  }
}