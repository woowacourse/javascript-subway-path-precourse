import { lineInfo } from "./utils/line-info.js";
import { dijkstraByDistance, dijkstraByTime } from "./utils/dijkstra-object.js";
import {
  isCorrectStationName,
  isExistingStation,
  notExistingRoute,
} from "./utils/exception-handling.js";

export const getSearchType = () => {
  const type = document.getElementsByName("search-type");
  if (type[0].checked === true) {
    return "최단거리";
  }
  return "최소시간";
};
export const getOneDistanceAndTime = (startStation, endStation) => {
  for (let i in lineInfo) {
    const line = lineInfo[i];
    for (let idx = 0; idx < line.stationList.length - 1; idx++) {
      if (
        startStation === line.stationList[idx] &&
        endStation === line.stationList[idx + 1]
      ) {
        return [line.distanceInfo[idx], line.timeInfo[idx]];
      }
    }
  }
  return [0, 0];
};
export const getTotalDistanceAndTime = (route) => {
  let totalDistance = 0;
  let totalTime = 0;
  for (let i = 0; i < route.length - 1; i++) {
    totalDistance += getOneDistanceAndTime(route[i], route[i + 1])[0];
    totalTime += getOneDistanceAndTime(route[i], route[i + 1])[1];
  }
  return [totalDistance, totalTime];
};

export const getResultInfo = (departureStation, arrivalStation, dijkstra) => {
  const route = dijkstra.findShortestPath(departureStation, arrivalStation);
  const [totalDistance, totalTime] = getTotalDistanceAndTime(route);
  const shortestRoute = route.join(" => ");

  return [totalDistance, totalTime, shortestRoute];
};
export const makeResultUI = (searchType, distance, time, shortestRoute) => {
  const totalDistance = distance;
  const totalTime = time;
  const route = shortestRoute;
  const resultTitle = `<h2>결과</h2>`;
  const resultSubTitle = `<h3>${searchType}</h3>`;
  const resultTable = `<table border="1px" text-align="center">
                        <thead>
                          <tr>
                            <th>총 거리</th>
                            <th>총 소요 시간</th>
                          </tr>
                        </thead>
                        <tbody id="result-table-content">
                          <tr>
                            <td>${totalDistance}km</td>
                            <td>${totalTime}분</td>
                          </tr>
                          <tr>
                            <td colspan="2">${route}</td>
                          </tr>
                        </tbody>
                      </table>`;
  document.getElementById("result").innerHTML += resultTitle;
  document.getElementById("result").innerHTML += resultSubTitle;
  document.getElementById("result").innerHTML += resultTable;
};
export const showResult = (searchType, departureStation, arrivalStation) => {
  const dijkstra =
    searchType === "최단거리" ? dijkstraByDistance : dijkstraByTime;
  const [totalDistance, totalTime, shortestRoute] = getResultInfo(
    departureStation,
    arrivalStation,
    dijkstra
  );
  if (totalDistance !== 0 && totalTime !== 0) {
    document.getElementById("result").innerHTML = "";
    makeResultUI(searchType, totalDistance, totalTime, shortestRoute);
  } else {
    notExistingRoute();
  }
};
const btnSearch = document.getElementById("search-button");
btnSearch.onclick = () => {
  const departureStation = document.getElementById(
    "departure-station-name-input"
  ).value;
  const arrivalStation = document.getElementById("arrival-station-name-input")
    .value;
  const searchType = getSearchType();
  if (
    isExistingStation(departureStation, arrivalStation) &&
    isCorrectStationName(departureStation) &&
    isCorrectStationName(arrivalStation)
  ) {
    showResult(searchType, departureStation, arrivalStation);
  }
};
