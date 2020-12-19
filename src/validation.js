import { stationDistanceKMMap } from "./utils/data.js";
const validateNameLength = (name) => {
  if (name.trim().length < 2) {
    return false;
  }
  return true;
};

const existStationName = (name) => {
  if (!stationDistanceKMMap[name]) {
    return false;
  }
  return true;
};

const stationNameValidation = (name) => {
  if (!validateNameLength(name)) {
    return alert("역의 이름은 두 글자 이상이어야 합니다.");
  }
  if (!existStationName(name)) {
    return alert("존재하지 않은 역은 입력할 수 없습니다.");
  }
};
