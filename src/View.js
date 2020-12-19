import { INIT, RESULT } from "./constants/skeleton.js";

export default class View {
  clickSearch = null;

  constructor() {
    this.initialize();
    this.clickSearchListener();
  }

  initialize() {
    const appEl = document.getElementById("app");
    appEl.innerHTML = INIT + RESULT;
  }

  clickSearchListener() {
    const searchButton = document.getElementById("search-button");
    searchButton.onclick = () => {
      const startStationValue = document.getElementById(
        "departure-station-name-input"
      ).value;
      const endStationValue = document.getElementById(
        "arrival-station-name-input"
      ).value;
      this.clickSearch(startStationValue, endStationValue);
    };
  }
}
