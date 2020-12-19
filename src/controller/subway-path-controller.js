import { Constant } from "../utils/constant.js";
import { Data } from "../utils/data.js";
import { StationValidation } from "../utils/validation.js";
import { ElementControl } from "../view/element.js";
import { SubwayPathView } from "../view/subway-path-view.js";

export const SubwayPathController = {
  onClickSearchButton() {
    const departure = document.querySelector(
      Constant.DEPARTURE_STATION_NAME_INPUT_ID
    ).value;
    const arrival = document.querySelector(
      Constant.ARRIVVAL_STATION_NAME_INPUT_ID
    ).value;

    if (
      StationValidation.isNotSameDepartureArrival(departure, arrival) &&
      StationValidation.isValidDepartureStation(departure) &&
      StationValidation.isValidArrivalStation(arrival)
    ) {
      this.checkRadioButton(departure, arrival);
    }
  },

  checkRadioButton(departure, arrival) {
    if (document.querySelector(Constant.SEARCH_TYPE_DISTANCE_ID).checked) {
      console.log("distance");
      this.findMinimumDistanceResult(departure, arrival);
    } else {
      console.log("time");
      this.findMinimumTimeResult(departure, arrival);
    }
    ElementControl.showResultContainer();
  },

  findMinimumDistanceResult(departure, arrival) {
    const dijkstra = Data.dijkstraDistance;
    const result = dijkstra.findShortestPath(departure, arrival);

    SubwayPathView.renderDistance(result);
  },

  findMinimumTimeResult(departure, arrival) {
    const dijkstra = Data.dijkstraTime;
    const result = dijkstra.findShortestPath(departure, arrival);

    SubwayPathView.renderTime(result);
  },
};
