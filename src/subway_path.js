import {station, line, edge} from "./init_data.js";
import SubwayEdge from "./subway_edge.js";
import SubwayMap from "./precourse/subway_map.js";

export default class SubwayPath {
  constructor() {
    this.subwayMap = new SubwayMap();
    this.edgeHash = this.initEdge(edge);

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
}
