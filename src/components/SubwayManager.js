import ValidateSubwayManager from "./ValidateSubwayManager.js";
import SearchLineManager from "./SearchLineManager.js";
import { stations, lines } from "../utils/data.js";
import {
  hideElement,
  getCheckedSearchType,
  showElement,
} from "../utils/domUtils.js";

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
    this.searchLineManager = new SearchLineManager(
      this.getState,
      this.getLines
    );
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

  handleSearchButton = event => {
    event.preventDefault();
    this.userState.departureStation = this.$departureStationInput.value;
    this.userState.arrivalStation = this.$arrivalStationInput.value;
    this.userState.searchType = getCheckedSearchType(
      this.$searchTypeRadioInputs
    );

    const isValidUserState = this.validateSubwayManager.checkNameValidation();

    if (isValidUserState) {
      showElement(this.$resultContainer);
      this.searchLineManager.render();
    }
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
