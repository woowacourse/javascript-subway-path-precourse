import Dijkstra from "../utils/Dijkstra.js";
import RoadResult from "../renders/RoadResult.js";
import { stations, lines } from "../common/StationInfo.js";

export default function FindRoadEvent(event) {
  const dijkstra = new Dijkstra();
  const startStation = document.getElementById("start-station-input").value;
  const endStation = document.getElementById("end-station-input").value;
  const information = "최단거리"; // 하드코딩
  const shortestPath = getShortestPath("교대", "양재시민의숲");
  const totalWeight = getShortestWeight(shortestPath);
  const totalDistance = totalWeight[0];
  const totalTime = totalWeight[1];
  console.log(totalDistance, totalTime);
  RoadResult(information, shortestPath, totalDistance, totalTime);

  function _getShortestPath(i, j, index) {
    for (let k = 0; k < lines[j].sections.length; k++) {
      if (stations[i].name === lines[j].sections[k][0]) {
        dijkstra.addEdge(
          lines[j].sections[k][0],
          lines[j].sections[k][1],
          lines[j].sections[k][index]
        );
      }
    }
  }

  function getShortestPath(start, end) {
    let index;
    if (information == "최단거리") {
      index = 2;
    } else if (information == "최소시간") {
      index = 3;
    } else {
      return console.log("잘못된 정보를 입력했습니다.");
    }
    for (let i = 0; i < stations.length; i++) {
      for (let j = 0; j < lines.length; j++) {
        _getShortestPath(i, j, index);
      }
    }

    return dijkstra.findShortestPath(start, end);
  }

  function _getShortestWeight(shortestPath, i, j) {
    let _distance = 0;
    let _time = 0;
    for (let k = 0; k < lines[j].sections.length; k++) {
      if (
        lines[j].sections[k][0] === shortestPath[i] &&
        lines[j].sections[k][1] === shortestPath[i + 1]
      ) {
        _distance += lines[j].sections[k][2];
        _time += lines[j].sections[k][3];
      }
    }

    return [_distance, _time];
  }
  function getShortestWeight(shortestPath) {
    let distance = 0;
    let time = 0;
    let temp;
    for (let i = 0; i < shortestPath.length; i++) {
      for (let j = 0; j < lines.length; j++) {
        temp = _getShortestWeight(shortestPath, i, j);
        distance += temp[0];
        time += temp[1];
      }
    }

    return [distance, time];
  }
}
