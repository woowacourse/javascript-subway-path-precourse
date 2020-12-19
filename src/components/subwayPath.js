import { ERROR_MESSAGE, FORM } from '../share/constants.js';
import { lineList, stationList } from '../share/defaultInformation.js';
import { isInclude } from '../share/validator.js';

export default class SubWayPath {
  constructor() {
    this.stationList = stationList;
    this.lineList = lineList;

    this.form = document.forms[FORM.CONTAINER];
    this.departureStationNameInput = this.form[
      FORM.DEPARTURE_STATION_NAME_INPUT
    ];
    this.arrivalStationNameInput = this.form[FORM.ARRIVAL_STATION_NAME_INPUT];
    this.distanceRadioInput = this.form[FORM.SEARCH_TYPE_DISTANCE_RADIO];
    this.timeRadioInput = this.form[FORM.SEARCH_TYPE_TIME_RADIO];
    this.searchButton = this.form[FORM.SEARCH_BUTTON_BUTTON];

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
    return {
      departureStationName,
      arrivalStationName,
    };
  };

  isValid(values) {
    if (!isInclude(values.departureStationName, this.stationList)) {
      alert(ERROR_MESSAGE.NO_DEPARTURE_STATION);
      return false;
    }
    if (!isInclude(values.arrivalStationName, this.stationList)) {
      alert(ERROR_MESSAGE.NO_ARRIVAL_STATION);
      return false;
    }
    return true;
  }
}
