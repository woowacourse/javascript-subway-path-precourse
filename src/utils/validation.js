import { NUMBER, ALERT } from "../@shared/constants.js";
import { showAlertMessage } from "../@shared/domUtils.js";

const isValidStationName = ($input, stationName, stationList) => {
  const name = stationName.trim();
  const isValidNameLength = name.length >= NUMBER.MIN_STATION_NAME_LENGTH;
  const isValidStation = stationList.includes(name);

  if (!isValidNameLength) {
    showAlertMessage($input, ALERT.INVALID_STATION_NAME_LENGTH);
  }

  if (!isValidStation) {
    showAlertMessage($input, ALERT.INVALID_STATION_NAME);
  }

  return isValidNameLength && isValidStation;
};

const isDuplicatedStations = ($input, departureStation, arrivalStation) => {
  const isDuplicated = departureStation === arrivalStation;

  if (isDuplicated) {
    showAlertMessage($input, ALERT.DUPLICATED_STATIONS);
  }

  return isDuplicated;
};

export { isValidStationName, isDuplicatedStations };
