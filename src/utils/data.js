import { Line, LineModel } from "../model/Line.js";
import { StationLine, StationName } from "../utils/constant.js";
import Dijkstra from "./Dijkstra.js";

export const Data = {
  dijkstraDistance: new Dijkstra(),

  initStations() {
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

  initDistance() {
    // 2
    this.dijkstraDistance.addEdge(
      StationName.SEOUL_NATIONAL_UNIV_OF_EDUCATION,
      StationName.GANGNAM,
      2
    );
    this.dijkstraDistance.addEdge(StationName.GANGNAM, StationName.YEOKSAM, 2);
    // 3
    this.dijkstraDistance.addEdge(
      StationName.SEOUL_NATIONAL_UNIV_OF_EDUCATION,
      StationName.NAMBU_BUS_TERMINAL,
      3
    );
    this.dijkstraDistance.addEdge(
      StationName.NAMBU_BUS_TERMINAL,
      StationName.YANGJAE,
      6
    );
    this.dijkstraDistance.addEdge(StationName.YANGJAE, StationName.MAEBONG, 1);
    // 신분당
    this.dijkstraDistance.addEdge(StationName.GANGNAM, StationName.YANGJAE, 2);
    this.dijkstraDistance.addEdge(
      StationName.YANGJAE,
      StationName.YANGJAE_CITIZENS_FOREST,
      10
    );
  },
};
