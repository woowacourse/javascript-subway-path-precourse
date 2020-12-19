import { NUMBER, ALERT } from "./constants.js";
import { showAlertMessage } from "./domUtils.js";

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

const isValidStationsInSection = (
  stationList,
  departureStation,
  arrivalStation
) => {
  const isIncludeBothStation =
    stationList.includes(departureStation) &&
    stationList.includes(arrivalStation);

  if (!isIncludeBothStation) {
    return false;
  }
  const departureStationIndex = stationList.indexOf(departureStation);
  const arrivalStationIndex = stationList.indexOf(arrivalStation);

  return departureStationIndex < arrivalStationIndex;
};

const isValidSection = ($input, departureStation, arrivalStation, lineList) => {
  const isValidList = lineList.map(line => {
    return isValidStationsInSection(
      line.station,
      departureStation,
      arrivalStation
    );
  });
  const hasValidSection = isValidList.includes(true);

  if (!hasValidSection) {
    showAlertMessage($input, ALERT.FAILED_TO_FIND_SECTION);
  }

  return hasValidSection;
};

export { isValidStationName, isDuplicatedStations, isValidSection };
