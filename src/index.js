import { validator } from "./utils/validator.js";
import { setMapByWeightType, calcTotal } from "./handleDijkstra.js";
import { STATION } from "./constants.js";
import { sections } from "./data/subwayInfo.js";
import { clearTable, clearInputArea } from "./views/dom.js";
import Dijkstra from "./utils/Dijkstra.js";
import { EDGE_INFO } from "./constants.js";

export default class SubwayManager {
  constructor() {
    this.sections = sections;
    this.initEvent();
  }

  findPath(departure, arrival, sections) {
    const radioElems = document.getElementsByName("search-type");
    const dijkstra = new Dijkstra();

    if (radioElems[0].checked) {
      for (let line in sections)
        setMapByWeightType(dijkstra, sections[line], EDGE_INFO.DISTANCE);
    }
    if (radioElems[1].checked) {
      for (let line in sections)
        setMapByWeightType(dijkstra, sections[line], EDGE_INFO.TIME);
    }
    const findedPath = dijkstra.findShortestPath(departure, arrival);
    calcTotal(findedPath, sections);
  }

  getStationsToFindPath() {
    const departure = document
      .getElementById("departure-station-name-input")
      .value.replace(/ /g, "");
    const arrival = document
      .getElementById("arrival-station-name-input")
      .value.replace(/ /g, "");

    if (validator(departure, arrival, this.sections))
      this.findPath(departure, arrival, this.sections);
    else {
      alert(STATION.INPUT_ERROR_MESSAGE);
      clearTable();
      clearInputArea();
    }
  }

  initEvent() {
    document.getElementById("search-button").addEventListener("click", () => {
      this.getStationsToFindPath();
    });
  }
}

new SubwayManager();
