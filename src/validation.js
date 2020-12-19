import { stationList } from "./utils/data.js";
import { errorMessage } from "./utils/const.js";
const { ERROR_SHORT_STATION, ERROR_NONEXIST_STATION, ERROR_EQUAL_STATION_NAME } = errorMessage;
const validateNameLength = (name) => name.trim().length > 1;

const existStationName = (name) => stationList.indexOf(name) > -1;

const equalStationName = (firstName, secondName) => firstName === secondName;

export const stationNameValidation = (nameArray) => {
  const [departStationName, arrivalStationName] = nameArray;
  if (!nameArray.every(validateNameLength)) {
    alert(ERROR_SHORT_STATION);
    return false;
  }
  if (!nameArray.every(existStationName)) {
    alert(ERROR_NONEXIST_STATION);
    return false;
  }
  if (equalStationName(departStationName, arrivalStationName)) {
    alert(ERROR_EQUAL_STATION_NAME);
    return false;
  }
  return true;
};
