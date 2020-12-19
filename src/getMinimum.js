import Dijkstra from './utils/Dijkstra.js';

export function minPath(data, departure, arrival, type) {
  const dijkstra = new Dijkstra();
  importDataToDijkstra(data, dijkstra, type);

  const result = dijkstra.findShortestPath(departure, arrival);
  return result;
}
function importDataToDijkstra(data, dijkstra, type) {
  for (let i=0; i<data.length; i++) {
    for (let j=0; j<data[i].stations.length-2; j+=2) {
      dijkstra.addEdge(data[i].stations[j], data[i].stations[j+2], data[i].stations[j+1][type]);
    }
  }
  return dijkstra;
}
