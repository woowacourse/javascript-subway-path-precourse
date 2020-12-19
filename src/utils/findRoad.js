import Dijkstra from "./Dijkstra.js";
import { printTable } from "./view";

export function findRoads(departure, arrival) {
  if (document.getElementsByName("search-type")[0].checked === true) {
    addValue(0, this, departure, arrival);
  } else {
    addValue(1, this, departure, arrival);
  }
}

export const addValue = (num, stations, departure, arrival) => {
  const dijkstra = new Dijkstra();
  stations.forEach((element) => {
    element.nextStations?.forEach((next) => {
      const nextStation = Object.keys(next)[0];
      dijkstra.addEdge(element.name, nextStation, next[nextStation][num]);
    });
  });
  const result = dijkstra.findShortestPath(departure, arrival);
};
