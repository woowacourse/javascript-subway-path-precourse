import {
  isExistPath,
  isSameStation,
  isVaildStationName,
} from "../utils/validations/subwayInputVaildation.js";

import { ID, OPTION, TYPE } from "../utils/constants/dom.js";

class SubwayInput {
  constructor($target, props) {
    this.$target = $target;
    this.props = props;

    this.mountDOMs();
    this.bindEvents();
  }

  mountDOMs() {
    this.$departureInput = this.$target.querySelector(`#${ID.DEPARTURE_INPUT}`);
    this.$arrivalInput = this.$target.querySelector(`#${ID.ARRIVAL_INPUT}`);
    this.$radioContainer = this.$target.querySelector(`#${ID.RADIO_CONTAINER}`);
    this.$searchButton = this.$target.querySelector(`#${ID.SEARCH_BUTTON}`);
  }

  bindEvents() {
    this.$target.addEventListener(`click`, this.onClick.bind(this));
  }

  onClick({ target }) {
    if (target.id !== ID.SEARCH_BUTTON) return;
    const { stations, sections, getTotalInfo } = this.props;
    const [departure, arrival, option] = this.getInputValues();

    if (
      !isVaildStationName(this.$departureInput, stations, departure) ||
      !isVaildStationName(this.$arrivalInput, stations, arrival) ||
      isSameStation(departure, arrival)
    ) {
      return;
    }

    const path = this.calculateResult(departure, arrival, option);
    if (!isExistPath(path)) return;
    getTotalInfo(sections, path);
  }

  getInputValues() {
    const departureStation = this.$departureInput.value.trim();
    const arrivalStation = this.$arrivalInput.value.trim();
    const option = this.$radioContainer.querySelector(
      `input[name=${TYPE.SEARCH_TYPE}]:checked`,
    ).value;

    return [departureStation, arrivalStation, option];
  }

  calculateResult(departure, arrival, option) {
    const { minDistanceStore, minTimeStore } = this.props;
    if (option === OPTION.MIN_DIST) {
      return minDistanceStore.findShortestPath(departure, arrival) || [];
    } else if (option === OPTION.MIN_TIME) {
      return minTimeStore.findShortestPath(departure, arrival) || [];
    } else {
      return [];
    }
  }
}

export default SubwayInput;
