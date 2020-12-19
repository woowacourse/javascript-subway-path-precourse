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

  countPathLengthAndTime = path => {
    let pathLength = 0;
    let pathTime = 0;
    for (let i = 0; i < path.length - 1; i++) {
      const start = path[i];
      const end = path[i + 1];
      this.lines[start].forEach(line => {
        if (line[0] === end) {
          console.log(start, end, line, pathLength, pathTime);
          pathLength += line[1];
          pathTime += line[2];
        }
      });
    }

    return { pathLength, pathTime };
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
