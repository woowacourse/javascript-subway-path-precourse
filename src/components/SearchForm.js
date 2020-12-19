import { FORM_ELEMENT, STATION_NAME_MIN_LENGTH, ERROR_MESSAGE } from "../utils/constants.js";

export default class SearchForm {
  constructor({ $target }) {
    this.$form = document.createElement("form");
    $target.append(this.$form);

    this.render();
    this.bindOnSubmit();
  }

  bindOnSubmit = () => {
    this.$form.addEventListener("submit", (event) => {
      this.onSubmit();

      event.preventDefault();
    });
  };

  onSubmit = () => {
    if (this.checkInputs()) {
      // TODO: submit 로직 작성
    }
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
    if (!this.isTextOverMinLength($stationNameInput.value, STATION_NAME_MIN_LENGTH)) {
      alert(ERROR_MESSAGE.shortStationName);
      $stationNameInput.value = "";

      return false;
    }

    return true;
  };

  checkStationNamesIsSame = (departureStationName, arrivalStationName) => {
    if (departureStationName === arrivalStationName) {
      alert(ERROR_MESSAGE.sameDepartureArrivalStationName);

      return false;
    }

    return true;
  };

  isTextOverMinLength = (text, minLength) => {
    return text.length < minLength ? false : true;
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
        <input type="radio" name="search-type" value="최단거리">
        최단거리
      </label>
      <label>
        <input type="radio" name="search-type" value="최소시간">
        최소시간
      </label><br>
      <button type="submit" id="${FORM_ELEMENT.searchButton.id}">${FORM_ELEMENT.searchButton.text}</button>
    `;
  };
}
