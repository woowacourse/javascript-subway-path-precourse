import { Line, LineModel } from "../model/Line.js";
import { Constant, StationLine, StationName } from "../utils/constant.js";
import { Data } from "../utils/data.js";
import { StationValidation } from "../utils/validation.js";
import { ElementControl } from "../view/element.js";

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
      ElementControl.showResultContainer();
      this.findResultDistance(departure, arrival);
    }
  },

  findResultDistance(departure, arrival) {
    const dijkstra = Data.dijkstraDistance;
    const result = dijkstra.findShortestPath(departure, arrival);

    console.log(result);
  },
};
