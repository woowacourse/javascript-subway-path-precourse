import DijstraStore from '../../store/dijkstra.js';

const { distanceDijkstra, timeDijkstra } = DijstraStore;

export default class subwayPath {
  static getMinDistancePath(startStationName, endStationName) {
    return distanceDijkstra.findShortestPath(startStationName, endStationName);
  }
}
