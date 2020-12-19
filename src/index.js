import { validator } from "./utils/validator.js";
import { findShortestPath } from "./pathFinder.js";
import { STATION } from "./constants.js";
import { sections } from "./data/subwayInfo.js";

export default class SubwayManager {
  constructor() {
    this.sections = sections;
    this.initEvent();
  }

  getStationsToFindPath() {
    const departure = document
      .getElementById("departure-station-name-input")
      .value.replace(/ /g, "");
    const arrival = document
      .getElementById("arrival-station-name-input")
      .value.replace(/ /g, "");

    if (validator(departure, arrival, this.sections))
      findShortestPath(departure, arrival, this.sections);
    else {
      alert(STATION.INPUT_ERROR_MESSAGE);
      document.getElementById("departure-station-name-input").value = "";
      document.getElementById("arrival-station-name-input").value = "";
    }
  }

  initEvent() {
    document.getElementById("search-button").addEventListener("click", () => {
      this.getStationsToFindPath();
    });
  }
}

new SubwayManager();
