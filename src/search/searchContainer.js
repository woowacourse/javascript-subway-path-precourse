import {
  checkBlank,
  checkEmpty,
  checkStationExist,
  checkTheList,
} from "../utils/validation.js";
import searchPresenter from "./searchPresenter.js";

const findSelectRadio = () => {
  const searchTypes = document.getElementsByName("search-type");

  let searchType;
  for (let i = 0; i < searchTypes.length; i++) {
    if (searchTypes[i].checked) {
      searchType = searchTypes[i].value;
    }
  }

  return searchType;
};

const getStations = () => {
  const departureStation = document.getElementById(
    "departure-station-name-input"
  ).value;
  const arrivalStation = document.getElementById("arrival-station-name-input")
    .value;

  const isEmpty = checkEmpty(departureStation, arrivalStation);
  const isBlank = checkBlank(departureStation, arrivalStation);
  const isExist = checkStationExist(departureStation, arrivalStation);
  const checkList = { isEmpty, isBlank, isExist };
  const isValid = checkTheList(checkList);

  if (isValid) {
    return { departureStation, arrivalStation };
  }
};

// 경로 계산
const calculatePath = (lineData, startStation, endStation) => {
  const { distance, route } = lineData.findShortestPath(
    startStation,
    endStation
  );

  return { distance, route };
};

const calculateInfo = (distance, endStation) => {
  const result = distance[endStation];

  return result;
};

const searchContainer = (lineData) => {
  const searchType = findSelectRadio();
  const result = getStations();

  if (result && result.departureStation && result.arrivalStation) {
    const CALCULATE_REFRENCE = searchType === "distance" ? "D" : "T";
    const startStation = result.departureStation + CALCULATE_REFRENCE;
    const endStation = result.arrivalStation + CALCULATE_REFRENCE;

    const { distance, route } = calculatePath(
      lineData,
      startStation,
      endStation
    );
    const shortest = calculateInfo(distance, endStation);

    searchPresenter(searchType, route, shortest);
  }
};

export default searchContainer;
