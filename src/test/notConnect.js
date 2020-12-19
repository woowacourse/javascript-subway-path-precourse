import { stations } from "../data.js";
import Model from "../Model.js";

const model = new Model();

let i,
  j,
  k = 1;

for (i = 0; i < stations.length; i++) {
  for (j = i + 1; j < stations.length; j++) {
    console.log(k);
    console.log(
      model.distanceDijkstra.findShortestPath(stations[i], stations[j])
    );
    k++;
  }
}
