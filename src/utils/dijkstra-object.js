import Dijkstra from "./Dijkstra.js";
import { lineInfo } from "../line-info.js";
export const dijkstraByDistance = new Dijkstra();
for (let i in lineInfo) {
  for (let j = 0; j < lineInfo[i].stationList.length - 1; j++) {
    dijkstraByDistance.addEdge(
      lineInfo[i].stationList[j],
      lineInfo[i].stationList[j + 1],
      lineInfo[i].distanceInfo[j]
    );
  }
}
export const dijkstraByTime = new Dijkstra();
for (let i in lineInfo) {
  for (let j = 0; j < lineInfo[i].stationList.length - 1; j++) {
    dijkstraByTime.addEdge(
      lineInfo[i].stationList[j],
      lineInfo[i].stationList[j + 1],
      lineInfo[i].timeInfo[j]
    );
  }
}
