import Dijkstra from "../utils/Dijkstra.js";
import { stationData } from "../StationData/stationData.js";
export { dijkstraDistance, dijkstraTime };

const dijkstraDistance = new Dijkstra();
const dijkstraTime = new Dijkstra();

stationData.forEach((station) => {
  dijkstraDistance.addEdge(station.V1, station.V2, station.distance);
  dijkstraTime.addEdge(station.V1, station.V2, station.time);
});
