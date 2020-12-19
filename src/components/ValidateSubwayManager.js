import { isValidStationName } from "../utils/validation.js";

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

  checkValidation = () => {
    const userState = this.getState();
    this.departureStation = userState.departureStation;
    this.arrivalStation = userState.arrivalStation;
    this.stations = this.getStations();

    if (!this.isValidDepartureStation()) return;

    if (!this.isValidArrivalStation()) return;

  };

  render = () => {
    this.setDOMElements();
  };
}

export default ValidateSubwayManager;
