import { DISTANCE, STATION, TIME } from "../constants/index.js";
import Dijkstra from "./Dijkstra.js";

// * 2호선 등록
const registerLineTwoTime = (dijkstra) => {
  const line = [STATION.EDUCATION_T, STATION.GANGNAM_T, STATION.YEOKSAM_T];
  const time = [TIME.EDUCATION_TO_GANGNAM, TIME.GANGNAM_TO_YEOKSAM];

  for (let i = 0; i < line.length - 1; i++) {
    dijkstra.addEdge(line[i], line[i + 1], time[i]);
  }
};

const registerLineTwoDistance = (dijkstra) => {
  const line = [STATION.EDUCATION_D, STATION.GANGNAM_D, STATION.YEOKSAM_D];
  const time = [DISTANCE.EDUCATION_TO_GANGNAM, DISTANCE.GANGNAM_TO_YEOKSAM];

  for (let i = 0; i < line.length - 1; i++) {
    dijkstra.addEdge(line[i], line[i + 1], time[i]);
  }
};

// * 3호선 등록
const registerLineThreeTime = (dijkstra) => {
  const line = [
    STATION.EDUCATION_T,
    STATION.SOUTH_TERMINAL_T,
    STATION.YANGJAE_T,
    STATION.MAEBONG_T,
  ];
  const time = [
    TIME.EDUCATION_TO_SOUTHT,
    TIME.SOUTHT_TO_YANGJAE,
    TIME.YANGJAE_TO_MAEBONG,
  ];

  for (let i = 0; i < line.length - 1; i++) {
    dijkstra.addEdge(line[i], line[i + 1], time[i]);
  }
};

const registerLineThreeDistance = (dijkstra) => {
  const line = [
    STATION.EDUCATION_D,
    STATION.SOUTH_TERMINAL_D,
    STATION.YANGJAE_D,
    STATION.MAEBONG_D,
  ];
  const distance = [
    DISTANCE.EDUCATION_TO_SOUTHT,
    DISTANCE.SOUTHT_TO_YANGJAE,
    DISTANCE.YANGJAE_TO_MAEBONG,
  ];

  for (let i = 0; i < line.length - 1; i++) {
    dijkstra.addEdge(line[i], line[i + 1], distance[i]);
  }
};

// * 신분당선 등록
const registerLineNewTime = (dijkstra) => {
  const line = [STATION.GANGNAM_T, STATION.YANGJAE_T, STATION.YANGJAE_FOREST_T];
  const time = [TIME.GANGNAM_TO_YANGJAE, TIME.YANGJAE_TO_YANGJAEF];

  for (let i = 0; i < line.length - 1; i++) {
    dijkstra.addEdge(line[i], line[i + 1], time[i]);
  }
};

const registerLineNewDistance = (dijkstra) => {
  const line = [STATION.GANGNAM_D, STATION.YANGJAE_D, STATION.YANGJAE_FOREST_D];
  const time = [DISTANCE.GANGNAM_TO_YANGJAE, DISTANCE.YANGJAE_TO_YANGJAEF];

  for (let i = 0; i < line.length - 1; i++) {
    dijkstra.addEdge(line[i], line[i + 1], time[i]);
  }
};

// 초기 노선 등록
const registerLine = (dijkstra) => {
  registerLineTwoTime(dijkstra);
  registerLineTwoDistance(dijkstra);
  registerLineThreeTime(dijkstra);
  registerLineThreeDistance(dijkstra);
  registerLineNewTime(dijkstra);
  registerLineNewDistance(dijkstra);
};

export const registerInitialLineInfo = () => {
  const dijkstra = new Dijkstra();

  registerLine(dijkstra);

  return dijkstra;
};
