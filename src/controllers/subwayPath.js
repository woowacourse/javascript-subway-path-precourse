import Stations from '../models/stations.js';
import { ID, NAME, ALERT } from '../constants/index.js';
import { isValidNameLength, isNameInStations } from '../utils/userException.js';
import { addDijkstraEdgeDistance } from '../utils/addDijkstra.js';
import Dijkstra from '../utils/Dijkstra.js';

export default class SubwayPath {
  constructor() {
    this.departureStation;
    this.arrivalStation;
    this.shortestSelect;

    const stations = new Stations();
    this.stations = stations.stations;

    this.search();
  }

  search() {
    const searchButton = document.querySelector(`#${ID.SEARCH_BUTTON}`);

    searchButton.addEventListener('click', () => {
      this.departureStation = this.getStation(ID.DEPARTURE_STATION_NAME_INPUT);
      this.arrivalStation = this.getStation(ID.ARRIVAL_STATION_NAME_INPUT);
      this.hasValidInput();
      this.shortestSelect = this.getShortestSelect();
      this.getResult();
    });
  }

  getStation(stationName) {
    const stationNameInput = document.querySelector(`#${stationName}`);

    const stationNameInputValue = this.hasValidName(stationNameInput.value);
    return stationNameInputValue;
  }

  getShortestSelect() {
    const selectors = document.getElementsByName(`${NAME.SEARCH_TYPE}`);

    selectors.forEach((selector) => {
      if (selector.checked) {
        return selector.defaultValue;
      }
    });
  }

  hasValidName(name) {
    if (!isValidNameLength(name)) {
      return null;
    } else if (!isNameInStations(this.stations, name)) {
      return null;
    } else {
      return name;
    }
  }

  hasValidInput() {
    if (this.departureStation === null || this.arrivalStation === null) {
      alert(ALERT.VALIDNAME);
    } else if (this.departureStation === this.arrivalStation) {
      alert(ALERT.DUPLICATEDNAME);
    }
  }

  getResult() {
    const dijkstra = new Dijkstra();
    let result = '';

    addDijkstraEdgeDistance(dijkstra);
    result = dijkstra.findShortestPath(this.departureStation, this.arrivalStation);
    console.log(result);
  }
}
