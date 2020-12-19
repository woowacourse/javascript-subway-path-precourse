import View from './View.js';
import { SEARCH_PATH } from '../utils/constants.js';

const tag = `[StationInputForm]`;
export default class SearchPathInputFormView extends View {
  setup($element) {
    console.log(`${tag} init`);
    this.init($element);
    this.renderSearchInputForm();
    return this;
  }

  renderSearchInputForm() {
    console.log(`${tag} renderSearchInputForm`);
    this.$element.innerHTML =
      this.getInputStationFormHTML() + this.getSelectSearchTypeBtnHTML() + this.getSubmitBtnHTML();

    this.$departureStationInput = this.$element.querySelector('#departure-station-name-input');
    this.$ArrivalStationInput = this.$element.querySelector('#arrival-station-name-input');
    this.$pathSelector = document.getElementsByName('search-type');
    this.bindEvent();
    return this;
  }

  getInputStationFormHTML() {
    console.log(`${tag} getInputStationFormHTML`);
    return `<div class="station-input-form-container">
        <label>출발역</label>
        <input id="departure-station-name-input" type="text" placeholder="">
        <br />
        <label>도착역</label>
        <input id="arrival-station-name-input" type="text" placeholder="">
      </div>`;
  }

  getSelectSearchTypeBtnHTML() {
    console.log(`${tag} getSelectSearchTypeBtnHTML`);
    return `<div class="path-selectors">
        <input type="radio" id=${SEARCH_PATH.MIN_DISTANCE} name="search-type" checked> <label for=${SEARCH_PATH.MIN_DISTANCE}>최단거리</label>
        <input type="radio" id=${SEARCH_PATH.MIN_TIME} name="search-type"> <label for=${SEARCH_PATH.MIN_TIME}>최소시간</label>
      </div>`;
  }

  getSubmitBtnHTML() {
    console.log(`${tag} getSubmitBtnHTML`);
    return `<button id="search-button">길 찾기</button>`;
  }

  resetInputForm() {
    this.$departureStationInput.value = '';
    this.$ArrivalStationInput.value = '';
  }

  bindEvent() {
    console.log(`${tag} bindEvent`);
    this.$element
      .querySelector('#search-button')
      .addEventListener('click', () => this.onSubmitSearchPathHandler());
  }

  onSubmitSearchPathHandler() {
    const searchInputValue = {
      departureStationName: this.$departureStationInput.value,
      arrivalStationName: this.$ArrivalStationInput.value,
      searchType: this.$pathSelector[0].checked
        ? this.$pathSelector[0].id
        : this.$pathSelector[1].id,
    };

    this.emit('submitSearchInputValue', searchInputValue);
  }
}
