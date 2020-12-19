import { FORM } from '../share/constants.js';
import { deleteWhiteSpace } from '../share/validator.js';

export default class Form {
  constructor() {
    this.container = document.forms[FORM.CONTAINER];
    this.departureStationNameInput = this.container[
      FORM.DEPARTURE_STATION_NAME_INPUT
    ];
    this.arrivalStationNameInput = this.container[
      FORM.ARRIVAL_STATION_NAME_INPUT
    ];
    this.distanceRadioInput = this.container[FORM.SEARCH_TYPE_DISTANCE_RADIO];
    this.timeRadioInput = this.container[FORM.SEARCH_TYPE_TIME_RADIO];
  }

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
}
