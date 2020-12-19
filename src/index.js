import { allStation, lineInfo } from "./line-info.js";
import { dijkstraByDistance, dijkstraByTime } from "./utils/dijkstra-object.js";
export const getSearchType = () => {
  const type = document.getElementsByName("search-type");
  if (type[0].checked === true) {
    return "minimum-distance";
  }
  return "minimum-time";
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
  console.log(totalDistance, totalTime, shortestRoute);
  return [totalDistance, totalTime, shortestRoute];
};
export const makeResultUI = () => {
  const totalDistance = "1";
  const totalTime = "20";
  const route = "asd";
  const resultTable = `<table>
                        <thead>
                          <tr>
                            <th>총 거리</th>
                            <th>총 소요 시간</th>
                          </tr>
                        </thead>
                        <tbody id="result-table-content">
                          <tr>
                            <td>${totalDistance}</td>
                            <td>${totalTime}</td>
                          </tr>
                          <tr>
                            <td colspan="2">${route}</td>
                          </tr>
                        </tbody>
                      </table>`;
  document.getElementById("result").innerHTML = resultTable;
};
const btnSearch = document.getElementById("search-button");
btnSearch.onclick = () => {
  const departureStation = document.getElementById(
    "departure-station-name-input"
  ).value;
  const arrivalStation = document.getElementById("arrival-station-name-input")
    .value;
  const searchType = getSearchType();
  if (searchType === "minimum-distance") {
    const dijkstra = dijkstraByDistance;
    getResultInfo(departureStation, arrivalStation, dijkstra);
    makeResultUI();
  } else {
    const dijkstra = dijkstraByTime;
    getResultInfo(dijkstra);
    makeResultUI();
  }
};
