import { Line, LineModel } from "../model/Line.js";
import { Constant, StationLine, StationName } from "../utils/constant.js";
import { StationValidation } from "../utils/validation.js";

export const SubwayPathController = {
  init() {
    LineModel.add(
      new Line(StationLine.LINE_TWO, [
        StationName.SEOUL_NATIONAL_UNIV_OF_EDUCATION,
        StationName.GANGNAM,
        StationName.YEOKSAM,
      ])
    );

    LineModel.add(
      new Line(StationLine.LINE_THREE, [
        StationName.SEOUL_NATIONAL_UNIV_OF_EDUCATION,
        StationName.NAMBU_BUS_TERMINAL,
        StationName.YANGJAE,
        StationName.MAEBONG,
      ])
    );

    LineModel.add(
      new Line(StationLine.LINE_SINBUNDANG, [
        StationName.GANGNAM,
        StationName.YANGJAE,
        StationName.YANGJAE_CITIZENS_FOREST,
      ])
    );

    // LineModel.allStations.push(
    //   StationName.SEOUL_NATIONAL_UNIV_OF_EDUCATION,
    //   StationName.GANGNAM,
    //   StationName.YEOKSAM,
    //   StationName.NAMBU_BUS_TERMINAL,
    //   StationName.YANGJAE,
    //   StationName.YANGJAE_CITIZENS_FOREST,
    //   StationName.MAEBONG
    // );
  },

  onClickSearchButton() {
    const departureStation = document.querySelector(
      Constant.DEPARTURE_STATION_NAME_INPUT_ID
    ).value;
    const arrivalStation = document.querySelector(
      Constant.ARRIVVAL_STATION_NAME_INPUT_ID
    ).value;

    if (StationValidation.isValidDepartureStation(departureStation)) {
      console.log("valid departure");
    }

    if (StationValidation.isValidArrivalStation(arrivalStation)) {
      console.log("valid arrival");
    }
  },
};
