import { stationDistanceKMMap } from "./utils/data.js";
import { errorMessage } from "./utils/const.js";
const { ERROR_SHORT_STATION, ERROR_NONEXIST_STATION, ERROR_EQUAL_STATION_NAME } = errorMessage;
const validateNameLength = (name) => name.trim().length < 2;

const existStationName = (name) => !stationDistanceKMMap[name];

const equalStationName = (firstName, secondName) => firstName === secondName;

export const stationNameValidation = (nameArray) => {
  const [departStationName, arrivalStationName] = nameArray;
  if (!nameArray.every(validateNameLength)) {
    return alert(ERROR_SHORT_STATION);
  }
  if (!nameArray.every(existStationName)) {
    return alert(ERROR_NONEXIST_STATION);
  }
  if (equalStationName(departStationName, arrivalStationName)) {
    return alert(ERROR_EQUAL_STATION_NAME);
  }
};
