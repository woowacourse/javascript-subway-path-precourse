import Dijkstra from "../utils/Dijkstra.js";
import { lines } from "../data.js";
export const dijkstraTime = new Dijkstra();
export const dijkstraDistance = new Dijkstra();

for (const line of lines) {
  for (const station of line.stations) {
    addEdge(station);
  }
}

function addEdge(station) {
  if (station.nextStation !== null) {
    dijkstraDistance.addEdge(
      station.name,
      station.nextStation,
      station.distance
    );
    dijkstraTime.addEdge(station.name, station.nextStation, station.time);
  }
}
