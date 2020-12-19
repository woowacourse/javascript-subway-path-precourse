import { lines } from "./data/line.js";
import StationService from "./service/station.service.js";
import SectionService from "./service/section.service.js";
import Dijkstra from "./utils/Dijkstra.js";
const dijkstra = new Dijkstra();

export default class App {
  constructor() {
    this.sectionService = new SectionService();
    this.stationService = new StationService();

    this.addClickEvent();
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

  searchPath() {
    try {
      const departureStation = this.getDepartureStationInput();
      const arrivalStation = this.getArrivalStationInput();
      const searchType = this.getSearchTypeInput();
      this.validateStationNameLength(departureStation, arrivalStation);
      this.validateStationExist(departureStation, arrivalStation);

      const paths = this.sectionService.findShortestPath(departureStation, arrivalStation);
      this.renderPathTable(paths);
    } catch (error) {
      alert(error);
    }
  }

  renderPathTable(paths) {
    const pathRowHTML = `
      <tr>
        <td> ${paths.length}</td>
        <td> </td>
      </tr>
      <tr>
       <td colspan="2">${paths.join("->")} </td>
      </tr>
    `;
    const table = document.getElementById("result-table").querySelector("tbody");
    table.innerHTML = pathRowHTML;
  }

  addClickEvent() {
    const button = document.getElementById("search-button");
    button.addEventListener("click", () => {
      this.searchPath();
    });
  }
}

const app = new App();
