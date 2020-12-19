import { STATION, EDGE_INFO } from "../constants.js";
import { stations } from "../data/subwayInfo.js";
import Dijkstra from "../utils/Dijkstra.js";

const isInStation = (station) => (stations.includes(station) ? true : false);

const setMap = (map, edges) => {
  for (let i = 0; i < edges.length; i++) {
    map.addEdge(edges[i][EDGE_INFO.DEPARTURE], edges[i][EDGE_INFO.ARRIVAL], 1);
    map.addEdge(edges[i][EDGE_INFO.ARRIVAL], edges[i][EDGE_INFO.DEPARTURE], 1);
  }
};

const hasPath = (departure, arrival, sections) => {
  const dijkstra = new Dijkstra();
  for (let line in sections) setMap(dijkstra, sections[line]);
  const result = dijkstra.findShortestPath(departure, arrival);
  if (result !== undefined) return true;
};

export const validator = (departure, arrival, sections) => {
  let validateResult = true;
  if (
    departure.length < STATION.NAME_LENGTH_LIMIT ||
    arrival.length < STATION.NAME_LENGTH_LIMIT
  )
    validateResult = false;
  if (departure === arrival) validateResult = false;
  if (!isInStation(departure) || !isInStation(arrival)) validateResult = false;
  if (!hasPath(departure, arrival, sections)) validateResult = false;
  return validateResult;
};
