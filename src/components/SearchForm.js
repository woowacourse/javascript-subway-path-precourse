import { FORM_ELEMENT, STATION_NAME_MIN_LENGTH, ERROR_MESSAGE } from "../utils/constants.js";

export default class SearchForm {
  constructor({ $target, stations, onSubmit }) {
    this.$form = document.createElement("form");
    $target.append(this.$form);

    this.stations = stations;
    this.onSubmit = onSubmit;

    this.render();
    this.bindOnSubmit();
  }

  bindOnSubmit = () => {
    this.$form.addEventListener("submit", (event) => {
      if (this.checkInputs()) {
        this.onSubmit({
          nextDepartureStationName: document.querySelector(`#${FORM_ELEMENT.departureStationInput.id}`).value,
          nextArrivalStationName: document.querySelector(`#${FORM_ELEMENT.arrivalStationInput.id}`).value,
          nextSearchType: document.querySelector("input[name='search-type']:checked").value,
        });
      }

      event.preventDefault();
    });
  };

  checkInputs = () => {
    const $departureStationInput = document.querySelector(`#${FORM_ELEMENT.departureStationInput.id}`);
    const $arrivalStationInput = document.querySelector(`#${FORM_ELEMENT.arrivalStationInput.id}`);

    return (
      this.checkStationName($departureStationInput) &&
      this.checkStationName($arrivalStationInput) &&
      this.checkStationNamesIsSame($departureStationInput.value, $arrivalStationInput.value)
    );
  };

  checkStationName = ($stationNameInput) => {
    let result = true;

    if (!this.isTextOverMinLength($stationNameInput.value, STATION_NAME_MIN_LENGTH)) {
      alert(ERROR_MESSAGE.shortStationName);
      $stationNameInput.value = "";
      result = false;
    }

    if (result && !this.isExistStation($stationNameInput.value, STATION_NAME_MIN_LENGTH)) {
      alert(ERROR_MESSAGE.invalidStationName($stationNameInput.value));
      result = false;
    }

    return result;
  };

  isTextOverMinLength = (text, minLength) => {
    return text.length < minLength ? false : true;
  };

  isExistStation = (stationName) => {
    return this.stations.includes(stationName);
  };

  checkStationNamesIsSame = (departureStationName, arrivalStationName) => {
    if (departureStationName === arrivalStationName) {
      alert(ERROR_MESSAGE.sameDepartureArrivalStationName);

      return false;
    }

    return true;
  };

  render = () => {
    this.$form.innerHTML = `
      <label>
        ${FORM_ELEMENT.departureStationInput.text}
        <input id="${FORM_ELEMENT.departureStationInput.id}" type="text">
      </label><br>
      <label>
        ${FORM_ELEMENT.arrivalStationInput.text}
        <input id="${FORM_ELEMENT.arrivalStationInput.id}" type="text">
      </label><br>
      <label>
        <input type="radio" name="search-type" value="distance" checked>
        최단거리
      </label>
      <label>
        <input type="radio" name="search-type" value="time">
        최소시간
      </label><br>
      <button type="submit" id="${FORM_ELEMENT.searchButton.id}">${FORM_ELEMENT.searchButton.text}</button>
    `;
  };
}
