import {
  getStation,
  getShortestSelect,
  hasValidName,
  hasValidInput,
  getResultPath,
  getResultDistance,
  getResultTime,
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
      this.getResult();
    });
  }

  getResult() {
    const resultPath = getResultPath(this.departureStation, this.arrivalStation);
    const resultDistance = getResultDistance(resultPath);
    const resultTime = getResultTime(resultPath);

    this.render(resultPath, resultDistance, resultTime);
  }

  render(resultPath, resultDistance, resultTime) {
    const resultTable = document.querySelector(`#${ID.RESULT_TABLE}`);
    resultTable.innerHTML = resultTableTemplate(
      this.shortestSelect,
      resultPath,
      resultDistance,
      resultTime
    );
  }
}
