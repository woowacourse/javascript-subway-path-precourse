import { clearInput } from "../utils/domUtils.js";
import {
  isSameStation,
  isVaildStationName,
} from "../utils/validations/subwayInputVaildation.js";

class SubwayInput {
  constructor($target, props) {
    this.$target = $target;
    this.props = props;

    this.mountDOMs();
    this.bindEvents();
  }

  mountDOMs() {
    this.$departureInput = this.$target.querySelector(
      `#departure-station-name-input`,
    );
    this.$arrivalInput = this.$target.querySelector(
      `#arrival-station-name-input`,
    );
    this.$radioContainer = this.$target.querySelector(`#radio-container`);
    this.$searchButton = this.$target.querySelector(`#search-button`);
  }

  bindEvents() {
    this.$target.addEventListener(`click`, this.onClick.bind(this));
  }

  onClick({ target }) {
    if (target.id !== `search-button`) return;
    const { stations, sections, getTotalInfo } = this.props;
    const [departure, arrival, option] = this.getInputValues();

    if (
      !isVaildStationName(this.$departureInput, stations, departure) ||
      !isVaildStationName(this.$arrivalInput, stations, arrival) ||
      isSameStation(departure, arrival)
    ) {
      return false;
    }

    const path = this.calculateResult(departure, arrival, option);
    getTotalInfo(sections, path);
  }

  getInputValues() {
    const departureStation = this.$departureInput.value.trim();
    const arrivalStation = this.$arrivalInput.value.trim();
    const option = this.$radioContainer.querySelector(
      `input[name=search-type]:checked`,
    ).value;

    return [departureStation, arrivalStation, option];
  }

  calculateResult(departure, arrival, option) {
    const { minDistanceStore, minTimeStore } = this.props;
    if (option == "최단거리") {
      return minDistanceStore.findShortestPath(departure, arrival);
    } else if (option == "최소시간") {
      return minTimeStore.findShortestPath(departure, arrival);
    }
  }
}

export default SubwayInput;
