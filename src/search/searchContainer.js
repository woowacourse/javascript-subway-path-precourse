import { checkBlank, checkEmpty, checkTheList } from "../utils/validation.js";
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
  const checkList = { isEmpty, isBlank };
  const isValid = checkTheList(checkList);

  if (isValid) {
    return { departureStation, arrivalStation };
  }
};

// 경로 계산
const calculatePath = (
  searchType,
  lineData,
  departureStation,
  arrivalStation
) => {
  const CALCULATE_REFRENCE = searchType === "distance" ? "D" : "T";

  const startStation = departureStation + CALCULATE_REFRENCE;
  const endStation = arrivalStation + CALCULATE_REFRENCE;

  const path = lineData.findShortestPath(startStation, endStation);

  return path;
};

const searchContainer = (lineData) => {
  const searchType = findSelectRadio();
  const { departureStation, arrivalStation } = getStations();

  const path = calculatePath(
    searchType,
    lineData,
    departureStation,
    arrivalStation
  );

  searchPresenter(searchType, path);
};

export default searchContainer;
