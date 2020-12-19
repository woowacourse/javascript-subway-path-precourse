import { dijkstraByDistance, dijkstraByTime } from "./utils/dijkstra-object.js";
import {
  isCorrectStationName,
  isExistingStation,
  notExistingRoute,
} from "./utils/exception-handling.js";
import { FindRoute } from "./utils/find-route.js";

export const getSearchType = () => {
  const type = document.getElementsByName("search-type");
  if (type[0].checked === true) {
    return "최단거리";
  }
  return "최소시간";
};
export const getResultInfo = (departureStation, arrivalStation, dijkstra) => {
  const finder = new FindRoute(departureStation, arrivalStation, dijkstra);
  const totalDistance = finder.getTotalDistance();
  const totalTime = finder.getTotalTime();
  const shortestRoute = finder.getRoute();

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
