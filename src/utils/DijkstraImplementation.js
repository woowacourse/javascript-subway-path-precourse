import { sections } from "../Data/data.js";
import Dijkstra from "./Dijkstra.js";

const distDijkstra = new Dijkstra();
const timeDijkstra = new Dijkstra();

sections.forEach(({ station, adjacent }) => {
  adjacent.forEach(({ station: nextStation, dist, time }) => {
    distDijkstra.addEdge(station, nextStation, dist);
    timeDijkstra.addEdge(station, nextStation, time);        
  });
});

export const findShortestDistanceRoute = (departure, arrival) => distDijkstra.findShortestPath(departure, arrival);
export const findShortestTimeRoute = (departure, arrival) => timeDijkstra.findShortestPath(departure, arrival);