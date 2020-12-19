import Dijkstra from "./utils/Dijkstra.js";
import {station, line, edge} from "./init_data.js";
import SubwayEdge from "./subway_edge.js";
import SubwayMap from "./precourse/subway_map.js";

export default class SubwayPath {
  constructor() {
    this.subwayMap = new SubwayMap();
    this.edgeHash = this.initEdge(edge);
    this.distanceDijkstra = this.initDistance(edge);

    const data = {
      station: station,
      line: line
    };
    this.subwayMap.deserialize(JSON.stringify(data));
  }

  // 초기 데이터 설정
  initEdge(data) {
    const edgeHash = {};
    for (const obj of data) {
      const edge = new SubwayEdge(obj.distance, obj.time);
      edgeHash[`${obj.source}-${obj.target}`] = edge;
      edgeHash[`${obj.target}-${obj.source}`] = edge;
    }
    return edgeHash;
  }

  // 최단거리 Dijkstra 세팅
  initDistance(data) {
    const dijkstra = new Dijkstra();
    for (const obj of data) {
      dijkstra.addEdge(obj.source, obj.target, obj.distance);
    }
    return dijkstra;
  }

  // 최단거리 구하기
  findShortestDistancePath(source, target) {
    return this.distanceDijkstra.findShortestPath(source, target);
  }

  // 경로의 총 거리와 총 소요시간 구하기
  getTotalDistanceAndTime(path) {
    let sumDistance = 0;
    let sumTime = 0;
    for (let i = 0; i < path.length - 1; i++) {
      const key = `${path[i]}-${path[i + 1]}`;
      const edge = this.edgeHash[key];
      if (edge === undefined) {
        return null;
      }
      sumDistance += edge.distance;
      sumTime += edge.time;
    }
    return {
      distance: sumDistance,
      time: sumTime
    };
  }
}
