import {
  checkStationNameisValid,
  checkTargetStationIncludedInStation,
  checkIsSame,
} from '../utils/validation.js';
export class FindPathInputs {
  constructor({ findPath }) {
    this.findPath = findPath;
    this.initializeDOM();
    this.initializeEvent();
  }

  initializeDOM = () => {
    this.departureStationInput = document.getElementById(
      'departure-station-name-input',
    );
    this.arrivalStationInput = document.getElementById(
      'arrival-station-name-input',
    );
    this.timeRadioButton = document.getElementById('by-time');
    this.distanceRadioButton = document.getElementById('by-distance');
    this.searchButton = document.getElementById('search-button');
  };

  initializeEvent = () => {
    this.searchButton.addEventListener('click', this.handleInputValues);
  };

  render = () => {};

  handleInputValues = () => {
    const departure = this.departureStationInput.value;
    const arrival = this.arrivalStationInput.value;

    this.checkIsValidStations(departure, arrival);
    this.initStationInput();
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
    let time = this.timeRadioButton.value;
    let distance = this.distanceRadioButton.value;

    return time ? time : distance;
  };

  initStationInput = () => {
    this.departureStationInput.value = '';
    this.arrivalStationInput.value = '';
  };
}
