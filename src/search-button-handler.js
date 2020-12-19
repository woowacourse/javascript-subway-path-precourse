import SubwayMap from "./subway-map.js";
import { ID_VALUES } from "./html-constant/html-id-values.js";
import {
  getChildById,
  getDepartureStationNameInput,
  getArrivalStationNameInput,
  getSearchType,
} from "./utils/custom-handlers.js";

const subwayMap = new SubwayMap();

const isInputLengthTwoOrGreater = (input) => {
  if (input.length < 2) {
    alert("역 이름을 두 글자 이상 입력해주세요.");
    return false;
  }
  return true;
};

const isInputStationExist = (station, stationIdentifier) => {
  if (!subwayMap.hasStation(station)) {
    alert(`존재하지 않는 역입니다. ${stationIdentifier}역을 확인해주세요`);
    return false;
  }
  return true;
};

const isStationsDistinct = (departureStationName, arrivalStationName) => {
  if (departureStationName === arrivalStationName) {
    alert("출발역과 도착역이 같을 수 없습니다.");
    return false;
  }
  return true;
};

const isStationsLinked = (departureStationName, arrivalStationName) => {
  if (
    subwayMap.getShortestPathForDistance(
      departureStationName,
      arrivalStationName
    ) === undefined
  ) {
    alert("경로가 존재하지 않습니다.");
    return false;
  }
  return true;
};

const isInputsValid = (appContainer) => {
  const departureStationName = getDepartureStationNameInput(appContainer).value;
  const arrivalStationName = getArrivalStationNameInput(appContainer).value;

  return (
    isInputLengthTwoOrGreater(departureStationName) &&
    isInputLengthTwoOrGreater(arrivalStationName) &&
    isInputStationExist(departureStationName, "출발") &&
    isInputStationExist(arrivalStationName, "도착") &&
    isStationsDistinct(departureStationName, arrivalStationName) &&
    isStationsLinked(departureStationName, arrivalStationName)
  );
};

const getShortestPathBySearchType = (
  departureStationName,
  arrivalStationName,
  searchType
) => {
  if (searchType === "0") {
    return subwayMap.getShortestPathForDistance(
      departureStationName,
      arrivalStationName
    );
  } else {
    return subwayMap.getShortestPathForTrevelTime(
      departureStationName,
      arrivalStationName
    );
  }
};

const renderDistanceSum = ($tbody, shortestPath) => {
  const $distanceSum = $tbody.children[0].children[0];
  $distanceSum.innerHTML = `
    ${subwayMap.getDistanceSum(shortestPath)}km
  `;
};

const renderTravelTimeSum = ($tbody, shortestPath) => {
  const $travelTimeSum = $tbody.children[0].children[1];
  $travelTimeSum.innerHTML = `
    ${subwayMap.getTravelTimeSum(shortestPath)}분
  `;
};

const renderShortestPath = ($tbody, shortestPath) => {
  const $route = $tbody.children[1].children[0];
  $route.innerHTML = shortestPath.reduce((_result, _station) => {
    return (_result += `➡︎${_station}`);
  });
};

const showShortestPathTable = (resultContainer, shortestPath) => {
  const $table = resultContainer.getElementsByTagName("table")[0];
  const $tbody = $table.getElementsByTagName("tbody")[0];
  $table.style.display = "";
  renderDistanceSum($tbody, shortestPath);
  renderTravelTimeSum($tbody, shortestPath);
  renderShortestPath($tbody, shortestPath);
};

const showResult = (appContainer) => {
  const shortestPath = getShortestPathBySearchType(
    getDepartureStationNameInput(appContainer).value,
    getArrivalStationNameInput(appContainer).value,
    getSearchType()
  );
  showShortestPathTable(
    getChildById(appContainer, ID_VALUES.result),
    shortestPath
  );
};

export default function searchButtonHandler(e) {
  if (isInputsValid(e.target.parentElement)) {
    showResult(e.target.parentElement);
  }
}
