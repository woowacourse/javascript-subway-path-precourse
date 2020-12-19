import * as Data from './Data.js';
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

    this.resultContainer = document.createElement('div');
    this.resultContainer.className = 'result';
    target.appendChild(this.resultContainer);
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
    const container = document.createElement('div');
    target.appendChild(container);
    container.className = 'station-input';

    container.innerHTML = `
      <div>
        <label for="departure">출발역</label>
        <input
          type="text"
          name="departure"
          id="departure-station-name-input"
        />
      </div>
      <div>
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
    const container = document.createElement('div');
    target.appendChild(container);
    container.className = 'radio-button';

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
    const { setState } = this;
    const container = document.createElement('div');
    target.appendChild(container);

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
      return alert('역 이름에 공백이 포함되어 있습니다. 다시 입력해주세요.');
    }
    if(!isLessThenTwo(startStation) || !isLessThenTwo(endStation)) {
      return alert('출발역과 도착역의 이름은 두글자 이상이어야 합니다.');
    }
    if(isEqual(startStation, endStation)) {
      return alert('출발역과 도착역의 이름이 같을 수 없습니다.');
    }
    if(!isIncludeStation(startStation) || !isIncludeStation(endStation)) {
      return alert('존재하지 않은 역이 입력되었습니다.');
    }
    return true;
  }

  setState() {
    const startStation = document.querySelector('#departure-station-name-input').value;
    const endStation = document.querySelector('#arrival-station-name-input').value;
    const searchType = document.querySelector('input[name="search-type"]:checked').value;

    if(!this.isPossible(startStation, endStation)) {
      return;
    }

    let shortestPath;
    if(searchType === '최단거리') {
      shortestPath = this.shortestDistanceDijkstra.findShortestPath(startStation, endStation);
    }
    else {
      shortestPath = this.shortestTimeDijkstra.findShortestPath(startStation, endStation);
    }
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