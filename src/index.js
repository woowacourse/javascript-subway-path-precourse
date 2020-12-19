import { allStation, lineInfo } from "./line-info.js";
import { dijkstraByDistance, dijkstraByTime } from "./utils/dijkstra-object.js";
export const getSearchType = () => {
  const type = document.getElementsByName("search-type");
  if (type[0].checked === true) {
    return "최단거리";
  }
  return "최소시간";
};
export const isExistingStation = (departureStation, arrivalStation) => {
  const stationInAllLine = allStation;
  if (
    stationInAllLine.includes(departureStation) &&
    stationInAllLine.includes(arrivalStation)
  ) {
    return true;
  }
  alert("존재하지 않는 역입니다.");
  return false;
};
export const isExistingRoute = () => {};
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
const btnSearch = document.getElementById("search-button");
btnSearch.onclick = () => {
  const departureStation = document.getElementById(
    "departure-station-name-input"
  ).value;
  const arrivalStation = document.getElementById("arrival-station-name-input")
    .value;
  const searchType = getSearchType();
  const dijkstra =
    searchType === "최단거리" ? dijkstraByDistance : dijkstraByTime;
  const [totalDistance, totalTime, shortestRoute] = getResultInfo(
    departureStation,
    arrivalStation,
    dijkstra
  );
  document.getElementById("result").innerHTML = "";
  makeResultUI(searchType, totalDistance, totalTime, shortestRoute);
};
