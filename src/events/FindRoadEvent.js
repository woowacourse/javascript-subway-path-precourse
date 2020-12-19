import Dijkstra from "../utils/Dijkstra.js";
import RoadResult from "../renders/RoadResult.js";
import { stations, lines } from "../common/StationInfo.js";

export default function FindRoadEvent(event) {
  const startStation = document.getElementById("start-station-input").value;
  const endStation = document.getElementById("end-station-input").value;
  const information = "최단거리"; // 하드코딩
  const stationList = stations;
  const lineList = lines;
  RoadResult(information);
}
