import { allStation } from "./line-info.js";

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
const btnSearch = document.getElementById("search-button");
btnSearch.onclick = () => {
  const departureStation = document.getElementById(
    "departure-station-name-input"
  ).value;
  const arrivalStation = document.getElementById("arrival-station-name-input")
    .value;
  const searchType = getSearchType();
};
