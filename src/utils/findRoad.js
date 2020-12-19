import Dijkstra from "./Dijkstra.js";
import { visibleToggle, printTable } from "./view.js";
export function findRoads(departure, arrival) {
  let result;
  let num;
  if (document.getElementsByName("search-type")[0].checked === true) {
    num = 0;
    result = addValue(num, this, departure, arrival);
  } else {
    num = 1;
    result = addValue(num, this, departure, arrival);
  }
  visibleToggle();
  printTable(num, result, this);
}

export const addValue = (num, stations, departure, arrival) => {
  const dijkstra = new Dijkstra();
  stations.forEach((element) => {
    element.nextStations?.forEach((next) => {
      const nextStation = Object.keys(next)[0];
      dijkstra.addEdge(element.name, nextStation, next[nextStation][num]);
    });
  });
  return dijkstra.findShortestPath(departure, arrival);
};
