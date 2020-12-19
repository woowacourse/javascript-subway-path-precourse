import { allStation } from "./line-info.js";

export const resetInput = () => {
  document.getElementById("departure-station-name-input").value = "";
  document.getElementById("arrival-station-name-input").value = "";
  document.getElementsByName("search-type")[0].checked = true;
};
export const isCorrectStationName = (station) => {
  if (station.length >= 2) {
    return true;
  }
  alert("지하철 역 이름을 두 글자 이상 입력하세요.");
  resetInput();
};
export const isExistingStation = (departureStation, arrivalStation) => {
  const stationInAllLine = allStation;
  if (
    stationInAllLine.includes(departureStation) &&
    stationInAllLine.includes(arrivalStation)
  ) {
    if (departureStation !== arrivalStation) {
      return true;
    }
    alert("출발역과 동일한 도착역을 입력할 수 없습니다.");
    resetInput();

    return false;
  }
  alert("존재하지 않는 역입니다.");
  resetInput();

  return false;
};
export const notExistingRoute = () => {
  alert("존재하지 않는 노선입니다.");
  resetInput();
};
export const removeBlank = (name) => {
  return name.trim();
};
