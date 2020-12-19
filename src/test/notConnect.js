import { stations, distanceDijkstra } from "../data.js";

let i,
  j,
  k = 1;

for (i = 0; i < stations.length; i++) {
  for (j = i + 1; j < stations.length; j++) {
    console.log(k);
    console.log(distanceDijkstra.findShortestPath(stations[i], stations[j]));
    k++;
  }
}
