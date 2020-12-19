import { STATION } from "../constants.js";
import { stations } from "../data/subwayInfo.js";
import Dijkstra from "../utils/Dijkstra.js";
import { sections } from "../data/subwayInfo.js";

const isInStation = (station) => (stations.includes(station) ? true : false);

const setMap = (map, edges) => {
  for (let i = 0; i < edges.length; i++) {
    map.addEdge(edges[i]["출발역"], edges[i]["도착역"], 1);
    map.addEdge(edges[i]["도착역"], edges[i]["출발역"], 1);
  }
};

const hasPath = (departure, arrival) => {
  const dijkstra = new Dijkstra();
  for (let line in sections) setMap(dijkstra, sections[line]);
  const result = dijkstra.findShortestPath(departure, arrival);
  if (result !== undefined) return true;
};

export const validator = (departure, arrival) => {
  let validateResult = true;
  if (
    departure.length < STATION.NAME_LENGTH_LIMIT ||
    arrival.length < STATION.NAME_LENGTH_LIMIT
  )
    validateResult = false;
  if (departure === arrival) validateResult = false;
  if (!isInStation(departure) || !isInStation(arrival)) validateResult = false;
  if (!hasPath(departure, arrival)) validateResult = false;
  return validateResult;
};
