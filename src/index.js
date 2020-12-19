import { lines } from "./data/line.js";
import StationService from "./service/station.service.js";

export default class App {
  constructor() {
    this.lines = lines;
    this.stationService = new StationService();
  }

  getDepartureStationInput() {
    const depatureStationInputField = document.getElementById("departure-station-name-input");
    return depatureStationInputField.value;
  }

  getArrivalStationInput() {
    const arrivalStationInputField = document.getElementById("arrival-station-name-input");
    return arrivalStationInputField.value;
  }

  getSearchTypeInput() {
    const searchTypeInputField = document.querySelector('input[name="search-type"]:checked');
    return searchTypeInputField.value;
  }

  validateStationNameLength(departureStationName, arrivalStationName) {
    if (
      departureStationName.length < this.stationService.MIN_STATION_NAME_LENGTH ||
      arrivalStationName.length < this.stationService.MIN_STATION_NAME_LENGTH
    ) {
      throw new Error("역 이름은 두글자 이상이어야 합니다.");
    }
  }

  validateStationExist(departureStationName, arrivalStationName) {
    const isDepartureStationExist = this.stationService.findByName(departureStationName).length;
    const isArrivalStationExist = this.stationService.findByName(arrivalStationName).length;

    if (!isDepartureStationExist || !isArrivalStationExist) {
      throw new Error("존재하지 않는 역입니다.");
    }
  }
}

const app = new App();
