import {
  DISTANCE,
  GANGNAM,
  GYODAE,
  INITIAL_STATION_VALUE,
  MAEBONG,
  NAMBUTERMINAL,
  YANGJAE,
  YANGJAEFOREST,
  YOKSSAM,
} from "../constant.js";
import Dijkstra from "./utils/Dijkstra.js";

const State = function () {
  this.state = {
    stations: [
      {
        name: GYODAE,
        relatedStations: [
          { name: GANGNAM, distance: 2, time: 3 },
          { name: NAMBUTERMINAL, distance: 3, time: 2 },
        ],
      },
      {
        name: GANGNAM,
        relatedStations: [
          { name: GYODAE, distance: 2, time: 3 },
          { name: YOKSSAM, distance: 2, time: 3 },
          { name: YANGJAE, distance: 2, time: 8 },
        ],
      },
      {
        name: YOKSSAM,
        relatedStations: [{ name: GANGNAM, distance: 2, time: 3 }],
      },
      {
        name: NAMBUTERMINAL,
        relatedStations: [
          { name: GYODAE, distance: 3, time: 2 },
          { name: YANGJAE, distance: 6, time: 5 },
        ],
      },
      {
        name: YANGJAE,
        relatedStations: [
          { name: NAMBUTERMINAL, distance: 6, time: 5 },
          { name: MAEBONG, distance: 1, time: 1 },
          { name: GANGNAM, distance: 2, time: 8 },
          { name: YANGJAEFOREST, distance: 10, time: 3 },
        ],
      },
      {
        name: MAEBONG,
        relatedStations: [{ name: YANGJAE, distance: 1, time: 1 }],
      },
      {
        name: YANGJAEFOREST,
        relatedStations: [{ name: YANGJAE, distance: 10, time: 3 }],
      },
    ],
    departureStation: INITIAL_STATION_VALUE,
    arrivalStation: INITIAL_STATION_VALUE,
    searchType: DISTANCE,
    alreadyGoneStations: [],
    dijkstra: new Dijkstra(),
  };
  this.setState = (key, value) => (this.state[key] = value);
};

export const { state, setState } = new State();
