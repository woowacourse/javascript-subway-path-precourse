import { stations, distanceDijkstra } from "../data.js";

let k = 0;
for (let i = 0; i < stations.length; i++) {
  for (let j = i + 1; j < stations.length; j++) {
    console.log(k);
    console.log(distanceDijkstra.findShortestPath(stations[i], stations[j]));
    k++;
  }
}
