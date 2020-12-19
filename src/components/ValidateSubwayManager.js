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

  checkDepartureStation = () => {
    return isValidStationName(
      this.$departureStationInput,
      this.departureStation,
      this.stations
    );
  };

  checkArrivalStation = () => {
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

    const isValidDepartureStation = this.checkDepartureStation();
    if (!isValidDepartureStation) return;

    const isValidArrivalStation = this.checkArrivalStation();
    if (!isValidArrivalStation) return;
  };

  render = () => {
    this.setDOMElements();
  };
}

export default ValidateSubwayManager;
