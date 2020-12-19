import { stations } from '../data.js';
import {
  ARRIVAL_STATION_NAME_INPUT,
  DEPARTURE_STATION_NAME_INPUT,
  NOT_REGISTRED_STATION,
  SAME_DEPARTURE_AND_ARRIVAL,
  SEARCH_BUTTON,
  SEARCH_TYPE,
  SHORTEST_DISTANCE_INPUT,
  SHORTEST_TIME_INPUT,
  STATION_NAME_LENGTH_LIMIT,
} from '../constants/index.js';
import {
  isRegistredStation,
  isSameDepartureAndArrival,
  isValidInputLength,
} from '../utils/index.js';

export default function PathInput({ findPath }) {
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
    if (id !== SEARCH_BUTTON) {
      return;
    }
    const departure = document.getElementById(DEPARTURE_STATION_NAME_INPUT)
      .value;
    const arrival = document.getElementById(ARRIVAL_STATION_NAME_INPUT).value;
    const radioButtons = document.getElementsByName(SEARCH_TYPE);
    if (
      this.isValidName(departure, arrival) &&
      this.isValid(departure, arrival)
    ) {
      this.findPath(departure, arrival, radioButtons);
    }
  };

  this.isValid = (departure, arrival) => {
    if (!isRegistredStation(departure, arrival, stations)) {
      alert(NOT_REGISTRED_STATION);
      return false;
    }

    return true;
  };

  this.isValidName = (departure, arrival) => {
    if (isSameDepartureAndArrival(departure, arrival)) {
      alert(SAME_DEPARTURE_AND_ARRIVAL);
      return false;
    }

    if (!isValidInputLength(departure, arrival)) {
      alert(STATION_NAME_LENGTH_LIMIT);
      return false;
    }

    return true;
  };

  this.findPath = (departure, arrival, radioButtons) => {
    for (const radioButton of radioButtons) {
      if (radioButton.checked) {
        findPath(departure, arrival, radioButton.labels[0].textContent);
      }
    }
  };

  this.departureStationNameInputTemplate = () => {
    return `<div class="departure-station">
      <label for=${DEPARTURE_STATION_NAME_INPUT}>출발역</label>
      <input id=${DEPARTURE_STATION_NAME_INPUT}>
    </div>`;
  };

  this.arrivalStationNameInputTemplate = () => {
    return `<div class="arrival-station">
    <label for=${ARRIVAL_STATION_NAME_INPUT}>도착역</label>
    <input id=${ARRIVAL_STATION_NAME_INPUT}>
  </div>`;
  };

  this.searchTypeRadioTemplate = () => {
    return `<div class="search-type">
      <input type="radio" id=${SHORTEST_DISTANCE_INPUT} name="search-type" checked>
      <label for=${SHORTEST_DISTANCE_INPUT}>최단거리</label>
      <input type="radio" id=${SHORTEST_TIME_INPUT} name="search-type">
      <label for=${SHORTEST_TIME_INPUT}>최소시간</label>
    </div>`;
  };

  this.serachButtonTemplate = () => {
    return `<button id=${SEARCH_BUTTON}>길 찾기</button>`;
  };

  this.render = () => {
    this.pathInputConatiner.innerHTML = this.template();
  };

  this.render();
}
