import {
  isRegistredStation,
  isSameDepartureAndArrival,
  isValidInputLength,
} from '../utils/index.js';
import { stations } from '../data.js';

export default function PathInput({ findRoute }) {
  this.pathInputConatiner = document.querySelector('.path-input-container');

  this.template = () => {
    return `
      ${this.departureStationNameInputTemplate()}
      ${this.arrivalStationNameInputTemplate()}
      ${this.searchTypeRadioTemplate()}
      ${this.serachButtonTemplate()}
    `;
  };

  this.searchEvent = ({ target: { id } }) => {
    if (id !== 'search-button') {
      return;
    }
    const departure = document.getElementById('departure-station-name-input')
      .value;
    const arrival = document.getElementById('arrival-station-name-input').value;
    const radioButtons = document.getElementsByName('search-type');
    if (
      this.isValidName(departure, arrival) &&
      this.isValid(departure, arrival)
    ) {
      this.findRoute(departure, arrival, radioButtons);
    }
  };

  this.isValid = (departure, arrival) => {
    if (!isRegistredStation(departure, arrival, stations)) {
      alert('존재하는 역만 출발역 또는 도착역으로 입력가능합니다.');
      return false;
    }

    return true;
  };

  this.isValidName = (departure, arrival) => {
    if (isSameDepartureAndArrival(departure, arrival)) {
      alert('출발역과 도착역은 달라야 합니다');
      return false;
    }

    if (!isValidInputLength(departure, arrival)) {
      alert('출발역과 도착역은 2글자 이상이어야 합니다.');
      return false;
    }

    return true;
  };

  this.findRoute = (departure, arrival, radioButtons) => {
    for (const radioButton of radioButtons) {
      if (radioButton.checked) {
        findRoute(departure, arrival, radioButton.labels[0].textContent);
      }
    }
  };

  this.departureStationNameInputTemplate = () => {
    return `<div class="departure-station">
      <label for="departure-station-name-input">출발역</label>
      <input id="departure-station-name-input">
    </div>`;
  };

  this.arrivalStationNameInputTemplate = () => {
    return `<div class="arrival-station">
    <label for="arrival-station-name-input">도착역</label>
    <input id="arrival-station-name-input">
  </div>`;
  };

  this.searchTypeRadioTemplate = () => {
    return `<div class="search-type">
      <input type="radio" id="short-distance-input" name="search-type" checked>
      <label for="short-distance-input">최단거리</label>
      <input type="radio" id="short-time-input" name="search-type">
      <label for="short-time-input">최소시간</label>
    </div>`;
  };

  this.serachButtonTemplate = () => {
    return `<button id="search-button">길 찾기</button>`;
  };

  this.render = () => {
    this.pathInputConatiner.innerHTML = this.template();
  };

  this.render();
}
