import { ERROR_MESSAGES, STATION_NAME_LEN_LIMIT } from './../configuration.js';

export const requestToFindShortestPath = (e) => {
  const departure = document.getElementById('departure-station-name-input');
  const departureName = departure.value;
  const arrival = document.getElementById('arrival-station-name-input');
  const arrivalName = arrival.value;
  const exception = validateStationNames(departureName, arrivalName);

  if (exception) {
    processException(exception);
  }
};

const validateStationNames = (departureName, arrivalName) => {
  return (
    validateOneStation(departureName) ||
    validateOneStation(arrivalName) ||
    validateRelationshipBetweenStations(departureName, arrivalName)
  );
};

const validateOneStation = (stationName) => {
  if (stationName.replace(' ', '').length === 0) {
    return 'STAION_NAME_ONLY_SPACE';
  }
  if (stationName.replace(' ', '').length < STATION_NAME_LEN_LIMIT) {
    return 'STAION_NAME_TOO_SHORT';
  }
};

const processException = (exception) => {
  alert(ERROR_MESSAGES[exception]);
};
