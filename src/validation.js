import { stationList } from "./utils/data.js";
import { errorMessage, constant } from "./utils/const.js";
const { ERROR_SHORT_STATION, ERROR_NONEXIST_STATION, ERROR_EQUAL_STATION_NAME } = errorMessage;
const { NAME_LENGTH, NAME_INDEX } = constant;

const validateNameLength = (name) => name.trim().length > NAME_LENGTH;

const existStationName = (name) => stationList.indexOf(name) > NAME_INDEX;

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
