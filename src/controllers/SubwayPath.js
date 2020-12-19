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

  createDijkstra = (departure, arrival, option) => {
    const dijkstra = new Dijkstra();
    for (let start in this.lines) {
      for (let node of this.lines[start]) {
        const end = node[value.LINE_NODE_INDEX];
        const edge = node[option];
        dijkstra.addEdge(start, end, edge);
      }
    }

    return dijkstra.findShortestPath(departure, arrival);
  };

  searchPath = (departure, arrival, option) => {
    let route = [];
    if (option === text.MIN_LENGTH) {
      route = this.createDijkstra(departure, arrival, value.LINE_LENGTH_INDEX);
    } else if (option === text.MIN_TIME) {
      route = this.createDijkstra(departure, arrival, value.LINE_WEIGHT_INDEX);
    }

    return route;
  };

  searchNodeInfo = (toSearch, toFind) => {
    for (let i = 0; i < toSearch.length; i++) {
      const line = toSearch[i];
      if (line[value.LINE_NODE_INDEX] === toFind) {
        const nodeLength = line[value.LINE_LENGTH_INDEX];
        const nodeTime = line[value.LINE_WEIGHT_INDEX];

        return { nodeLength, nodeTime };
      }
    }
  };

  getLengthAndTime = path => {
    let pathLength = 0;
    let pathTime = 0;
    for (let i = 0; i < path.length - 1; i++) {
      const { nodeLength, nodeTime } = this.searchNodeInfo(
        this.lines[path[i]],
        path[i + 1]
      );
      pathLength += nodeLength;
      pathTime += nodeTime;
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
