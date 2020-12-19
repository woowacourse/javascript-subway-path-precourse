import { stationDistanceKMMap } from "./utils/data.js";
const validateNameLength = (name) => name.trim().length < 2;

const existStationName = (name) => !stationDistanceKMMap[name];

const equalStationName = (firstName, secondName) => firstName === secondName;

const stationNameValidation = (nameArray) => {
  const [departStationName, arrivalStationName] = nameArray;
  if (!nameArray.every(validateNameLength)) {
    return alert("역의 이름은 두 글자 이상이어야 합니다.");
  }
  if (!nameArray.every(existStationName)) {
    return alert("존재하지 않은 역은 입력할 수 없습니다.");
  }
  if (equalStationName(departStationName, arrivalStationName)) {
    return alert("출발역과 도착역이 같을 수 없습니다.");
  }
};
