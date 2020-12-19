import View from './View.js';
import { SEARCH_PATH_TYPE } from '../utils/constants.js';

export default class SearchPathInputFormView extends View {
  setup($element) {
    this.init($element);
    this.renderSearchInputForm();
    return this;
  }

  renderSearchInputForm() {
    this.$element.innerHTML =
      this.getInputStationFormHTML() + this.getSelectSearchTypeBtnHTML() + this.getSubmitBtnHTML();

    this.$departureStationInput = this.$element.querySelector('#departure-station-name-input');
    this.$ArrivalStationInput = this.$element.querySelector('#arrival-station-name-input');
    this.$pathSelectorContainer = this.$element.querySelector('.path-selectors');

    this.bindInputEvent();
    this.bindClickEvent();
    return this;
  }

  getInputStationFormHTML() {
    return `<div class="station-input-form-container">
        <label>출발역</label>
        <input id="departure-station-name-input" type="text" placeholder="">
        <br />
        <label>도착역</label>
        <input id="arrival-station-name-input" type="text" placeholder="">
      </div>`;
  }

  getSelectSearchTypeBtnHTML() {
    return `<div class="path-selectors">
        <input type="radio" id=${SEARCH_PATH_TYPE.MIN_DISTANCE} name="search-type" checked> <label id="min_distance_selector_label" for=${SEARCH_PATH_TYPE.MIN_DISTANCE}>최단거리</label>
        <input type="radio" id=${SEARCH_PATH_TYPE.MIN_TIME} name="search-type"> <label for=${SEARCH_PATH_TYPE.MIN_TIME}>최소시간</label>
      </div>`;
  }

  getSubmitBtnHTML() {
    return `<button id="search-button">길 찾기</button>`;
  }

  resetInputForm() {
    this.$departureStationInput.value = '';
    this.$ArrivalStationInput.value = '';
  }

  bindInputEvent() {
    this.$element
      .querySelector('#search-button')
      .addEventListener('click', () => this.onSubmitSearchPathHandler());
  }

  onSubmitSearchPathHandler() {
    const searchInputValue = {
      departureStationName: this.$departureStationInput.value,
      arrivalStationName: this.$ArrivalStationInput.value,
    };

    this.emit('submitSearchInputValue', searchInputValue);
  }

  bindClickEvent() {
    this.$pathSelectorContainer.addEventListener('click', (e) =>
      this.onChangeSearchPathHandler(e.target.id)
    );
  }

  onChangeSearchPathHandler(targetId) {
    if (targetId === SEARCH_PATH_TYPE.MIN_DISTANCE || targetId === SEARCH_PATH_TYPE.MIN_TIME) {
      this.emit('onChangeSelector', targetId);
    }
  }
}
