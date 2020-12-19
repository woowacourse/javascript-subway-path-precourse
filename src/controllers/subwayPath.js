import { ID, NAME, ALERT } from '../constants/index.js';
import { isValidNameLength, isNameInStations } from '../utils/userException.js';
import { addDijkstraEdgeDistance } from '../utils/addDijkstra.js';
import Dijkstra from '../utils/Dijkstra.js';
import Stations from '../models/stations.js';

export default class SubwayPath {
  constructor() {
    this.departureStation;
    this.arrivalStation;
    this.shortestSelect;

    const stations = new Stations();
    this.stations = stations.stations;
  }

  getStation(stationName) {
    const stationNameInput = document.querySelector(`#${stationName}`);

    const stationNameInputValue = this.hasValidName(stationNameInput.value, this.stations);
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

  hasValidName(name, stations) {
    if (!isValidNameLength(name)) {
      return null;
    } else if (!isNameInStations(stations, name)) {
      return null;
    } else {
      return name;
    }
  }

  hasValidInput(departureStation, arrivalStation) {
    if (departureStation === null || arrivalStation === null) {
      alert(ALERT.VALIDNAME);
    } else if (departureStation === arrivalStation) {
      alert(ALERT.DUPLICATEDNAME);
    }
  }

  getResult(departureStation, arrivalStation) {
    const dijkstra = new Dijkstra();
    let result = '';

    addDijkstraEdgeDistance(dijkstra);
    result = dijkstra.findShortestPath(departureStation, arrivalStation);
    return result;
  }
}
