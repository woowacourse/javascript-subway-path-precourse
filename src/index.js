import { validator } from "./utils/validator.js";
import { findShortestPath } from "./pathFinder.js";

export default class SubwayManager {
  constructor() {
    this.initEvent();
  }

  getStationsToFindPath() {
    const departure = document
      .getElementById("departure-station-name-input")
      .value.replace(/ /g, "");
    const arrival = document
      .getElementById("arrival-station-name-input")
      .value.replace(/ /g, "");

    if (validator(departure, arrival)) findShortestPath(departure, arrival);
  }

  initEvent() {
    document.getElementById("search-button").addEventListener("click", () => {
      this.getStationsToFindPath();
    });
  }
}

new SubwayManager();
