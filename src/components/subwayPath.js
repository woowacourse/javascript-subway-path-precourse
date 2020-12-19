import { ERROR_MESSAGE, SEARCH_TYPE } from '../share/constants.js';
import { lineList, stationList } from '../share/defaultInformation.js';
import {
  isInclude,
  isSameStation,
  isValidLength,
  isEmpty,
} from '../share/validator.js';
import Dijkstra from '../utils/Dijkstra.js';
import Form from './subwayPathForm.js';
import ResultTable from './subwayPathResult.js';

export default class SubWayPath {
  constructor() {
    this.stationList = stationList;
    this.lineList = lineList;
    this.distanceDijkstra = new Dijkstra();
    this.timeDijkstra = new Dijkstra();

    this.form = new Form();
    this.resultSection = new ResultTable();

    this.form.container.addEventListener('submit', this.onSubmit);
  }

  onSubmit = (event) => {
    event.preventDefault();
    const allValues = this.form.getValues();
    if (this.isValid(allValues)) {
      this.resultSection.render(this.getResultValues());
    }
  };

  isValid = (values) =>
    this.checkValidLength(values) &&
    this.checkAlreadyIncludes(values) &&
    this.checkSameStation(values) &&
    this.checkConnected(values);

  checkValidLength = (values) => {
    if (
      !isValidLength(values.arrivalStationName, 2) ||
      !isValidLength(values.departureStationName, 2)
    ) {
      alert(ERROR_MESSAGE.MIN_STATION_NAME);
      return false;
    }
    return true;
  };

  checkValidSection(values) {
    const sectionByTime = this.timeDijkstra.findShortestPath(
      values.departureStationName,
      values.arrivalStationName,
    );
    return !isEmpty(sectionByTime);
  }

  checkSameStation = (values) => {
    if (isSameStation(values.departureStationName, values.arrivalStationName)) {
      alert(ERROR_MESSAGE.SAME_STATION);
      return false;
    }
    return true;
  };

  checkAlreadyIncludes = (values) => {
    if (!isInclude(values.departureStationName, this.stationList)) {
      alert(ERROR_MESSAGE.NO_DEPARTURE_STATION);
      return false;
    }
    if (!isInclude(values.arrivalStationName, this.stationList)) {
      alert(ERROR_MESSAGE.NO_ARRIVAL_STATION);
      return false;
    }
    return true;
  };

  checkConnected = (values) => {
    if (!this.checkValidSection(values)) {
      alert(ERROR_MESSAGE.NOT_CONNECTED);
      return false;
    }
    return true;
  };

  getResultValues() {
    const values = this.form.getValues();
    const finder =
      values.searchType === SEARCH_TYPE.MIN_DISTANCE
        ? this.distanceDijkstra
        : this.timeDijkstra;
    const route = finder
      .findShortestPath(values.departureStationName, values.arrivalStationName)
      .join('=>');
    return {
      searchType: values.searchType,
      distance: 5,
      time: 5,
      route,
    };
  }
}
