import SubwayPath from './subwayPath.js';
import { ID, NAME, ALERT } from '../constants/index.js';

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
      this.subwayPath.getResult(this.departureStation, this.arrivalStation);
    });
  }
}
