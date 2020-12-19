import { isNull, isUnderTwo, isUndefind, isEqual } from "../utils/valid.js";

const isValid = (_departureStation, _arrivalStation) => {
  if (isNull(_departureStation) || isNull(_arrivalStation)) {
    alert("역 이름을 입력해주세요.");
    return;
  } else if (isUnderTwo(_departureStation) || isUnderTwo(_arrivalStation)) {
    alert("역 이름은 두 글자 이상입니다.");
    return;
  } else if (isUndefind(_departureStation) || isUndefind(_arrivalStation)) {
    alert("조회하신 역은 없는 역입니다.");
    return;
  } else if (isEqual(_departureStation, _arrivalStation)) {
    alert("출발역과 도착역은 같을 수 없습니다.");
    return;
  }

  return true;
};

const getDepartureStation = () => {
  return document.getElementById("departure-station-name-input").value;
};

const getArrivalStation = () => {
  return document.getElementById("arrival-station-name-input").value;
};

const getSearchType = () => {
  const searchTypes = document.getElementsByClassName("search-type-input");

  return [...searchTypes].find((x) => x.checked === true).value;
};

const getPathFinderInput = () => {
  const departureStation = getDepartureStation();
  const arrivalStation = getArrivalStation();

  if (isValid(departureStation, arrivalStation)) {
    return [getDepartureStation(), getArrivalStation(), getSearchType()];
  }
};

export { getPathFinderInput };
