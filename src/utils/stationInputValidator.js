import { ERROR_MESSAGE } from './constants.js';

const isNotNull = (departureStationName, arrivalStationName) => {
  return departureStationName === '' || arrivalStationName === ''
    ? alert(ERROR_MESSAGE.IS_EMPTY_STRING)
    : true;
};

const isMoreThanOneString = (departureStationName, arrivalStationName) => {
  return departureStationName.length > 1 && arrivalStationName.length > 1
    ? true
    : alert(ERROR_MESSAGE.IS_TOO_SHORT_STRING);
};

const isNotSameStation = (departureStationName, arrivalStationName) => {
  return departureStationName !== arrivalStationName ? true : alert(ERROR_MESSAGE.IS_SAME_STATION);
};

const isExistStation = (departureStationName, arrivalStationName, stationNames) => {
  return stationNames.includes(departureStationName) && stationNames.includes(arrivalStationName)
    ? true
    : alert(ERROR_MESSAGE.IS_NOT_EXIST);
};

export default function stationInputValidator(
  departureStationName,
  arrivalStationName,
  stationNames
) {
  return (
    isNotNull(departureStationName, arrivalStationName) &&
    isMoreThanOneString(departureStationName, arrivalStationName) &&
    isNotSameStation(departureStationName, arrivalStationName) &&
    isExistStation(departureStationName, arrivalStationName, stationNames)
  );
}
