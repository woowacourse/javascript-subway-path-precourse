import { lineData } from './data.js';
import Dijkstra from './utils/Dijkstra.js';

export function SubwayDistancePath() {
  this.dijkstra = new Dijkstra();
  lineData.forEach(data => {
    data.distanceInfo.forEach(info => {
      this.dijkstra.addEdge(...info);
    });
  });
  this.stations = Object.keys(this.dijkstra.callAdjacencyList());
  this.findPath = (start, end) => {
    console.log('거리로 찾기...');
    return this.dijkstra.findShortestPath(start, end);
  };
}

export function SubwayTimePath() {
  this.dijkstra = new Dijkstra();
  lineData.forEach(data => {
    data.timeInfo.forEach(info => {
      this.dijkstra.addEdge(...info);
    });
  });
  this.stations = Object.keys(this.dijkstra.callAdjacencyList());
  this.findPath = (start, end) => {
    console.log('시간으로 찾기...');
    return this.dijkstra.findShortestPath(start, end);
  };
}
