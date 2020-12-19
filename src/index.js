import { allStation } from "./line-info.js";
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
    makeResultUI();
  } else {
    const dijkstra = dijkstraByDistance;
  }
};
