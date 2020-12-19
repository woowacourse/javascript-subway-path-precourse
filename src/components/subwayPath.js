import { ERROR_MESSAGE, FORM, RESULT } from '../share/constants.js';
import { lineList, stationList } from '../share/defaultInformation.js';
import {
  isInclude,
  isSameStation,
  isValidLength,
  isEmpty,
  deleteWhiteSpace,
} from '../share/validator.js';
import Dijkstra from '../utils/Dijkstra.js';

export default class SubWayPath {
  constructor() {
    this.stationList = stationList;
    this.lineList = lineList;
    this.distanceDijkstra = new Dijkstra();
    this.timeDijkstra = new Dijkstra();

    this.form = document.forms[FORM.CONTAINER];
    this.departureStationNameInput = this.form[
      FORM.DEPARTURE_STATION_NAME_INPUT
    ];
    this.arrivalStationNameInput = this.form[FORM.ARRIVAL_STATION_NAME_INPUT];
    this.distanceRadioInput = this.form[FORM.SEARCH_TYPE_DISTANCE_RADIO];
    this.timeRadioInput = this.form[FORM.SEARCH_TYPE_TIME_RADIO];

    this.resultContainer = document.querySelector(`#${RESULT.CONTAINER}`);
    this.resultHeader = document.querySelector(`#${RESULT.RESULT_HEADER}`);
    this.resultTableBody = document.querySelector(
      `#${RESULT.RESULT_TABLE_BODY}`,
    );

    this.form.addEventListener('submit', this.onSubmit);
  }

  onSubmit = (event) => {
    event.preventDefault();
    const allValues = this.getValues();
    if (this.isValid(allValues)) {
      console.log('통과');
    }
  };

  getValues = () => {
    const { value: departureStationName } = this.departureStationNameInput;
    const { value: arrivalStationName } = this.arrivalStationNameInput;
    const searchType = this.getSearchType();
    return {
      departureStationName: deleteWhiteSpace(departureStationName),
      arrivalStationName: deleteWhiteSpace(arrivalStationName),
      searchType,
    };
  };

  getSearchType = () =>
    this.distanceRadioInput.checked
      ? this.distanceRadioInput.dataset.searchType
      : this.timeRadioInput.dataset.searchType;

  isValid(values) {
    if (
      !isValidLength(values.arrivalStationName, 2) ||
      !isValidLength(values.departureStationName, 2)
    ) {
      alert(ERROR_MESSAGE.MIN_STATION_NAME);
      return false;
    }
    if (!isInclude(values.departureStationName, this.stationList)) {
      alert(ERROR_MESSAGE.NO_DEPARTURE_STATION);
      return false;
    }
    if (!isInclude(values.arrivalStationName, this.stationList)) {
      alert(ERROR_MESSAGE.NO_ARRIVAL_STATION);
      return false;
    }
    if (isSameStation(values.departureStationName, values.arrivalStationName)) {
      alert(ERROR_MESSAGE.SAME_STATION);
      return false;
    }
    if (!this.checkValidSection(values)) {
      alert(ERROR_MESSAGE.NOT_CONNECTED);
      return false;
    }
    return true;
  }

  checkValidSection(values) {
    const sectionByTime = this.timeDijkstra.findShortestPath(
      values.departureStationName,
      values.arrivalStationName,
    );
    return !isEmpty(sectionByTime);
  }
}
