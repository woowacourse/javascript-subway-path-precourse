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

  getShotestPathCost(route) {
    let time = 0;
    let dist = 0;
    for (let i = 0; i < route.length - 1; i++) {
      const [t, d] = this.getCost(route[i], route[i + 1]);
      time += t;
      dist += d;
    }
    return [time, dist];
  }

  getCost(begin, end) {
    const { lines } = this;
    for (let line of lines) {
      const { station, distance, time } = line;
      const idx1 = station.findIndex(item => item === begin);
      const idx2 = station.findIndex(item => item === end);
      if (idx1 === undefined || idx2 === undefined) continue;
      if (idx2 - idx1 === 1) {
        return [time[idx1], distance[idx1]];
      }
    }
  }

  includeStation(station) {
    return this.stations.includes(station);
  }
}
