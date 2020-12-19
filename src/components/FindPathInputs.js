import {
  checkStationNameisValid,
  checkTargetStationIncludedInStation,
  checkIsSame,
} from '../utils/validation.js';
import { VALUE } from '../constants/constants.js';

export class FindPathInputs {
  constructor({ findPath }) {
    this.findPath = findPath;
    this.initializeDOM();
    this.initializeEvent();
  }

  initializeDOM = () => {
    this.departureStationInput = document.getElementById('departure-station-name-input');
    this.arrivalStationInput = document.getElementById('arrival-station-name-input');
    this.timeRadioButton = document.getElementById('by-time');
    this.distanceRadioButton = document.getElementById('by-distance');
    this.searchButton = document.getElementById('search-button');
  };

  initializeEvent = () => {
    this.searchButton.addEventListener('click', this.handleInputValues);
  };

  handleInputValues = () => {
    const departure = this.departureStationInput.value;
    const arrival = this.arrivalStationInput.value;

    this.checkIsValidStations(departure, arrival);
  };

  checkIsValidStations = (departure, arrival) => {
    if (
      !checkStationNameisValid(departure, arrival) ||
      !checkTargetStationIncludedInStation(departure, arrival) ||
      !checkIsSame(departure, arrival)
    ) {
      return;
    }

    let checkedWeight = this.getNameCheckedWeight();
    this.findPath(departure, arrival, checkedWeight);
  };

  getNameCheckedWeight = () => {
    let time = this.timeRadioButton.checked;
    return time ? VALUE.TIME_VALUE : VALUE.DISTANCE_VALUE;
  };
}
