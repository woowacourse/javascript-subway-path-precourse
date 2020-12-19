import { FORM_ELEMENT } from "../utils/constants.js";

export default class SearchForm {
  constructor({ $target }) {
    this.$form = document.createElement("form");
    $target.append(this.$form);

    this.render();
  }

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
      <button id="${FORM_ELEMENT.searchButton.id}">${FORM_ELEMENT.searchButton.text}</button>
    `;
  };
}
