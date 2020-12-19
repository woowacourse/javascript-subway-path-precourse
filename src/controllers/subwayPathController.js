import {
  getStation,
  getShortestSelect,
  hasValidName,
  hasValidInput,
  getResult,
} from './subwayPath.js';
import { ID, NAME, ALERT } from '../constants/index.js';
import { resultTableTemplate } from '../views/template.js';

export default class SubwayPathController {
  constructor() {
    this.departureStation;
    this.arrivalStation;
    this.shortestSelect;

    this.search();
  }

  search() {
    const searchButton = document.querySelector(`#${ID.SEARCH_BUTTON}`);

    searchButton.addEventListener('click', () => {
      this.departureStation = getStation(ID.DEPARTURE_STATION_NAME_INPUT);
      this.arrivalStation = getStation(ID.ARRIVAL_STATION_NAME_INPUT);
      hasValidInput(this.departureStation, this.arrivalStation);
      this.shortestSelect = getShortestSelect();
      const result = getResult(this.departureStation, this.arrivalStation);
      this.render(result);
    });
  }

  render(result) {
    const resultTable = document.querySelector(`#${ID.RESULT_TABLE}`);
    resultTable.innerHTML = resultTableTemplate(this.shortestSelect, result);
  }
}
