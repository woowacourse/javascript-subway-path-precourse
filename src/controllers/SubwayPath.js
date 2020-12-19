import { lines } from "../datas/data.js";
import Dijkstra from "../utils/Dijkstra.js";
import {
  isEnoughLength,
  isDiffrentName,
  isAvailable,
  isConnected,
} from "../utils/util.js";

class SubwayPath {
  constructor() {
    this.lines = lines;
  }

  createDijkstra(departure, arrival, option) {
    const dijkstra = new Dijkstra();

    for (let start in lines) {
      for (let node of lines[start]) {
        const end = node[0];
        const edge = node[option];
        dijkstra.addEdge(start, end, edge);
      }
    }

    return dijkstra.findShortestPath(departure, arrival);
  }

  searchPath = (departure, arrival, option) => {
    let route = [];
    if (option === "최단거리") {
      route = this.createDijkstra(departure, arrival, 1);
    } else if (option === "최소시간") {
      route = this.createDijkstra(departure, arrival, 2);
    }

    return route;
  };

  checkVaild = (departure, arrival) => {
    const vaild =
      isEnoughLength(departure, arrival) ||
      isDiffrentName(departure, arrival) ||
      isAvailable(departure, arrival) ||
      isConnected(departure, arrival);
    if (vaild) {
      alert(vaild);
    } else {
      return true;
    }
  };
}

export default SubwayPath;
