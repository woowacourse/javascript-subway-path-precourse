import ValidateSubwayManager from "./ValidateSubwayManager.js";
import PrintResultManager from "./PrintResultManager.js";
import DijkstraManager from "./DijkstraManager.js";
import { stations, lines } from "../utils/data.js";
import {
  hideElement,
  getCheckedSearchType,
  showElement,
} from "../utils/domUtils.js";
import { SEARCH_TYPE } from "../utils/constants.js";
import { isValidSection } from "../utils/validation.js";

class SubwayManager {
  constructor() {
    this.stations = stations;
    this.lines = lines;

    this.render();
  }

  setDOMElements = () => {
    this.$departureStationInput = document.querySelector(
      "#departure-station-name-input"
    );
    this.$arrivalStationInput = document.querySelector(
      "#arrival-station-name-input"
    );
    this.$searchTypeRadioInputs = document.querySelectorAll(
      "input[name='search-type']"
    );
    this.$searchButton = document.querySelector("#search-button");
    this.$resultContainer = document.querySelector("#result-container");
  };

  setComponents = () => {
    this.validateSubwayManager = new ValidateSubwayManager(
      this.getState,
      this.getStations,
      this.getLines
    );
    this.printResultManager = new PrintResultManager(
      this.getLines,
      this.getLineResult
    );
    this.dijkstraManager = new DijkstraManager(this.getLines);
  };

  resetState = () => {
    this.userState = {
      departureStation: "",
      arrivalStation: "",
      searchType: "",
    };
  };

  getState = () => {
    return this.userState;
  };

  getStations = () => {
    return this.stations;
  };

  getLines = () => {
    return this.lines;
  };

  getLineResult = () => {
    return this.lineResult;
  };

  handleSearchButton = event => {
    event.preventDefault();
    this.userState.departureStation = this.$departureStationInput.value;
    this.userState.arrivalStation = this.$arrivalStationInput.value;
    this.userState.searchType = getCheckedSearchType(
      this.$searchTypeRadioInputs
    );

    const isValidUserState = this.validateSubwayManager.checkNameValidation();
    if (!isValidUserState) return;

    this.lineResult = this.getLineResult();
    if (!isValidSection(this.$arrivalStationInput, this.lineResult)) return;

    showElement(this.$resultContainer);
    this.printResultManager.render();
  };

  getLineResult = () => {
    const { departureStation, arrivalStation, searchType } = this.userState;
    let lineResult;

    if (searchType === SEARCH_TYPE.DISTANCE) {
      lineResult = this.dijkstraManager.getDistanceResult(
        departureStation,
        arrivalStation
      );
    }

    if (searchType === SEARCH_TYPE.MINUTE) {
      lineResult = this.dijkstraManager.getMinuteResult(
        departureStation,
        arrivalStation
      );
    }

    return lineResult;
  };

  resetDOMElements = () => {
    hideElement(this.$resultContainer);
  };

  render = () => {
    this.setDOMElements();
    this.resetDOMElements();
    this.resetState();
    this.setComponents();

    this.$searchButton.addEventListener("click", this.handleSearchButton);
  };
}

export default SubwayManager;
