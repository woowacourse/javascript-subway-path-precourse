import Stations from '../models/stations.js';
import { ID, NAME } from '../constants/index.js';

export default class SubwayPath {
  constructor() {
    this.departureStation;
    this.arrivalStation;
    this.shortestSelect;

    this.search();
  }

  search() {
    const searchButton = document.querySelector(`#${ID.SEARCH_BUTTON}`);

    searchButton.addEventListener('click', () => {
      this.departureStation = this.getDepartureStation();
      this.arrivalStation = this.getDepartureStation();
      this.shortestSelect = this.getShortestSelect();
    });
  }

  getDepartureStation() {
    const departureStation = document.querySelector(`#${ID.DEPARTURE_STATION_NAME_INPUT}`);

    return departureStation.value;
  }

  getArrivalStation() {
    const arrivalStation = document.querySelector(`#${ID.ARRIVAL_STATION_NAME_INPUT}`);

    return arrivalStation.value;
  }

  getShortestSelect() {
    const selectors = document.getElementsByName(`${NAME.SEARCH_TYPE}`);

    selectors.forEach((selector) => {
      if (selector.checked) {
        return selector.defaultValue;
      }
    });
  }
}
