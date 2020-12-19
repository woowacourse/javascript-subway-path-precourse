import SubwayPath from './subwayPath.js';
import { ID, NAME, ALERT } from '../constants/index.js';
import { resultTableTemplate } from '../views/template.js';

export default class SubwayPathController {
  subwayPath = new SubwayPath();
  constructor() {
    this.departureStation;
    this.arrivalStation;
    this.shortestSelect;

    this.search();
  }

  search() {
    const searchButton = document.querySelector(`#${ID.SEARCH_BUTTON}`);

    searchButton.addEventListener('click', () => {
      this.departureStation = this.subwayPath.getStation(ID.DEPARTURE_STATION_NAME_INPUT);
      this.arrivalStation = this.subwayPath.getStation(ID.ARRIVAL_STATION_NAME_INPUT);
      this.subwayPath.hasValidInput(this.departureStation, this.arrivalStation);
      this.shortestSelect = this.subwayPath.getShortestSelect();
      const result = this.subwayPath.getResult(this.departureStation, this.arrivalStation);
      this.render(result);
    });
  }

  render(result) {
    const resultTable = document.querySelector(`#${ID.RESULT_TABLE}`);
    resultTable.innerHTML = resultTableTemplate(this.shortestSelect, result);
  }
}
