import { Line, LineModel } from "../model/Line.js";
import { StationLine, StationName } from "../utils/constant.js";

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
  },
};
