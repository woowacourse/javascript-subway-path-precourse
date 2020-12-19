import {
  isValidStationName,
  isDuplicatedStations,
} from "../utils/validation.js";

class ValidateSubwayManager {
  constructor(getState, getStations) {
    this.getState = getState;
    this.getStations = getStations;

    this.render();
  }

  setDOMElements = () => {
    this.$departureStationInput = document.querySelector(
      "#departure-station-name-input"
    );
    this.$arrivalStationInput = document.querySelector(
      "#arrival-station-name-input"
    );
  };

  isValidDepartureStation = () => {
    return isValidStationName(
      this.$departureStationInput,
      this.departureStation,
      this.stations
    );
  };

  isValidArrivalStation = () => {
    return isValidStationName(
      this.$arrivalStationInput,
      this.arrivalStation,
      this.stations
    );
  };

  isDuplicatedStation = () => {
    return isDuplicatedStations(
      this.$arrivalStationInput,
      this.departureStation,
      this.arrivalStation
    );
  };

  checkNameValidation = () => {
    const userState = this.getState();
    this.departureStation = userState.departureStation;
    this.arrivalStation = userState.arrivalStation;
    this.stations = this.getStations();

    if (!this.isValidDepartureStation()) return false;

    if (!this.isValidArrivalStation()) return false;

    if (!this.isDuplicatedStation()) return false;

    return true;
  };

  render = () => {
    this.setDOMElements();
  };
}

export default ValidateSubwayManager;
