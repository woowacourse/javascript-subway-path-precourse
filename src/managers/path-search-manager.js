import {
  ERROR_MESSAGES,
  STATION_NAME_LEN_LIMIT,
  STATIONS,
} from './../configuration.js';

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
  stationName = stationName.replace(' ', '');

  if (stationName.length === 0) {
    return 'STAION_NAME_ONLY_SPACE';
  }
  if (stationName.length < STATION_NAME_LEN_LIMIT) {
    return 'STAION_NAME_TOO_SHORT';
  }
  if (!STATIONS.includes(stationName)) {
    return 'STAION_NAME_NOT_EXIST';
  }
};

const processException = (exception) => {
  alert(ERROR_MESSAGES[exception]);
};
