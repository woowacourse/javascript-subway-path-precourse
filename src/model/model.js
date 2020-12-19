import { stations, lines } from './data.js';
import Dijkstra from '../utils/Dijkstra.js';

export default class Model {
  constructor() {
    // TODO: data 가져와서 초기화
    this.stations = stations;
    this.lines = lines;
    // this.dijkstraList = this.initDijkstra();
    [this.distDijkstra, this.timeDijkstra] = this.initDijkstra();
  }

  initData() {}

  initDijkstra() {
    // TODO: lines를 하나씩 돌면서 각각 역에 대한 dist를 가져와 disjktar에 add
    const { lines } = this;
    const distDijkstra = new Dijkstra();
    const timeDijkstra = new Dijkstra();

    lines.map(line => {
      const { station, distance, time } = line;
      for (let i = 0; i < station.length - 1; i++) {
        distDijkstra.addEdge(station[i], station[i + 1], distance[i]);
        timeDijkstra.addEdge(station[i], station[i + 1], time[i]);
      }
    });

    return [distDijkstra, timeDijkstra];
  }

  getShortestPathByDistance(begin, end) {
    return this.distDijkstra.findShortestPath(begin, end);
  }

  getShortestPathByTime(begin, end) {
    return this.timeDijkstra.findShortestPath(begin, end);
  }

  includeStation(station) {
    return this.stations.includes(station);
  }
}
