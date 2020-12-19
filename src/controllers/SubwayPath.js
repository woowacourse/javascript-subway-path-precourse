import { lines } from "../datas/data.js";
import Dijkstra from "../utils/Dijkstra.js";
import {
  isEnoughLength,
  isDiffrentName,
  isAvailable,
  isConnected,
} from "../utils/util.js";
import { text, value } from "../constants/constant.js";

class SubwayPath {
  constructor() {
    this.lines = lines;
  }

  createDijkstra(departure, arrival, option) {
    const dijkstra = new Dijkstra();

    for (let start in lines) {
      for (let node of lines[start]) {
        const end = node[value.LINE_NODE_INDEX];
        const edge = node[option];
        dijkstra.addEdge(start, end, edge);
      }
    }

    return dijkstra.findShortestPath(departure, arrival);
  }

  searchPath = (departure, arrival, option) => {
    let route = [];
    if (option === text.MIN_LENGTH) {
      route = this.createDijkstra(departure, arrival, value.LINE_LENGTH_INDEX);
    } else if (option === text.MIN_TIME) {
      route = this.createDijkstra(departure, arrival, value.LINE_WEIGHT_INDEX);
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
        if (line[value.LINE_NODE_INDEX] === end) {
          pathLength += line[value.LINE_LENGTH_INDEX];
          pathTime += line[value.LINE_WEIGHT_INDEX];
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
