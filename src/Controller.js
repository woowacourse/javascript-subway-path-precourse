import {
  CANT_INPUT_NOT_EXIST_STATION,
  CANT_SAME_START_AND_END,
  MUST_MORE_THAN_2,
} from "./constants/message.js";
import { SHORTEST_DISTANCE, SHORTEST_TIME } from "./constants/text.js";

const DISTANCE = "distance";

export default class Controller {
  constructor(Model, View) {
    this.Model = Model;
    this.View = View;
    this.initialize();
  }

  initialize() {
    this.View.handleException = this.handleException.bind(this);
    this.View.getResultContent = this.getResultContent.bind(this);
  }

  handleException(start, end) {
    if (start.length < 2 || end.length < 2) {
      alert(MUST_MORE_THAN_2);
      return true;
    }
    if (!this.existStation(start) || !this.existStation(end)) {
      alert(CANT_INPUT_NOT_EXIST_STATION);
      return true;
    }
    if (start === end) {
      alert(CANT_SAME_START_AND_END);
      return true;
    }
    return false;
  }

  getResultContent(start, end, type) {
    const isTypeDistance = type === DISTANCE;
    const shortestPath = this.Model[
      isTypeDistance ? "distanceDijkstra" : "timeDijkstra"
    ].findShortestPath(start, end);
    const totalDistanceAndTime = this.Model.getTotalTimeAndDistance(
      shortestPath
    );
    return [
      ...totalDistanceAndTime,
      shortestPath.join(" ➡"),
      isTypeDistance ? SHORTEST_DISTANCE : SHORTEST_TIME,
    ];
  }

  existStation(name) {
    return this.Model.stations.indexOf(name) > -1;
  }
}
