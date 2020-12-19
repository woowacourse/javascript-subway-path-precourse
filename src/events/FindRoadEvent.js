import Dijkstra from "../utils/Dijkstra.js";
import RoadResult from "../renders/RoadResult.js";
import { stations, lines } from "../common/StationInfo.js";

export default function FindRoadEvent(event) {
  const dijkstra = new Dijkstra();
  const startStation = document.getElementById("start-station-input").value;
  const endStation = document.getElementById("end-station-input").value;
  const information = "최소시간"; // 하드코딩
  const result = getShortestPath("교대", "양재시민의숲");
  console.log(result);
  RoadResult(information);

  function _getShortestPath(index1, index2, index3) {
    for (let k = 0; k < lines[index2].sections.length; k++) {
      if (stations[index1].name === lines[index2].sections[k][0]) {
        dijkstra.addEdge(
          lines[index2].sections[k][0],
          lines[index2].sections[k][1],
          lines[index2].sections[k][index3]
        );
      }
    }
  }

  function getShortestPath(start, end) {
    let index3;
    if (information == "최단거리") {
      index3 = 2;
    } else if (information == "최소시간") {
      index3 = 3;
    } else {
      return console.log("잘못된 정보를 입력했습니다.");
    }
    for (let i = 0; i < stations.length; i++) {
      for (let j = 0; j < lines.length; j++) {
        _getShortestPath(i, j, index3);
      }
    }

    return dijkstra.findShortestPath(start, end, information);
  }
}
