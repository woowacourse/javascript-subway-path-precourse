import { sections } from "./index.js";
import Dijkstra from "../utils/Dijkstra.js";

export const minDistanceStore = new Dijkstra();
export const minTimeStore = new Dijkstra();

sections.forEach(({ departure, arrival, distance, time }) => {
  minDistanceStore.addEdge(departure, arrival, distance);
  minTimeStore.addEdge(departure, arrival, time);
});
