import Dijkstra from './utils/Dijkstra.js';
const dijkstra = new Dijkstra();

//dijkstra.addEdge("출발역", "도착역", 거리 또는 시간);
dijkstra.addEdge('V1', 'V2', 2);
dijkstra.addEdge('V2', 'V4', 2);
// dijkstra.addEdge('V1', 'V3', 100);

const result = dijkstra.findShortestPath('V1', 'V3');

console.log(result);
