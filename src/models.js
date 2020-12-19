import { lineData } from './data.js';
import Dijkstra from './utils/Dijkstra.js';

export function SubwayDistancePath() {
  this.dijkstra = new Dijkstra();
  this.stations = Object.keys(this.dijkstra.callAdjacencyList());
  lineData.forEach(data => {
    data.distanceInfo.forEach(info => {
      this.dijkstra.addEdge(...info);
    });
  });
}

export function SubwayTimePath() {
  this.dijkstra = new Dijkstra();
  this.stations = Object.keys(this.dijkstra.callAdjacencyList());
  lineData.forEach(data => {
    data.timeInfo.forEach(info => {
      this.dijkstra.addEdge(...info);
    });
  });
}
