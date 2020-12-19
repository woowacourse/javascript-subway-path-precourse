import Dijkstra from "../utils/Dijkstra.js";
import RoadResult from "../renders/RoadResult.js";
import { alertMessage } from "../common/alertMessage.js";
import { stations, lines } from "../common/StationInfo.js";
import { isSatisfyLength, isExistStation } from "../common/checkInput.js";

export default function FindRoadEvent() {
  const dijkstra = new Dijkstra();
  const startStation = document.getElementById("departure-station-name-input").value;
  const endStation = document.getElementById("arrival-station-name-input").value;
  const information = whichRadioChecked();
  if (!isValidInput()) {
    return;
  }
  const shortestPath = getShortestPath(startStation, endStation);
  if (!isStationsConneted()) {
    return;
  }
  const totalWeight = getShortestWeight(shortestPath);
  const totalDistance = totalWeight[0];
  const totalTime = totalWeight[1];
  RoadResult(information, shortestPath, totalDistance, totalTime);

  function isValidInput() {
    if (!isSatisfyLength(startStation) || !isSatisfyLength(endStation)) {
      alert(alertMessage.SHORT_LENGTH_ERROR);
      return false;
    } else if (startStation === endStation) {
      alert(alertMessage.SAME_DESTINATION_ERROR);
      return false;
    } else if (!isExistStation(stations, startStation) || !isExistStation(stations, endStation)) {
      alert(alertMessage.NOT_EXIST_STATION);
      return false;
    } else if (information === undefined) {
      alert(alertMessage.NONE_SELECTED_RADIO);
      return false;
    }
    return true;
  }

  function whichRadioChecked() {
    const shortestPathRadio = document.getElementById("shortest-path-radio");
    const minTimeRadio = document.getElementById("min-time-path-radio");

    if (shortestPathRadio.checked) {
      return shortestPathRadio.value;
    } else if (minTimeRadio.checked) {
      return minTimeRadio.value;
    } else {
      return undefined;
    }
  }

  function isStationsConneted() {
    if (shortestPath === undefined) {
      alert(alertMessage.NOT_CONNECTED_LINE);
      return false;
    }
    return true;
  }

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
      } else if (
        lines[j].sections[k][1] === shortestPath[i] &&
        lines[j].sections[k][0] === shortestPath[i + 1]
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
