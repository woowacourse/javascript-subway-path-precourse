import { MINIMUM_STATION_NAME_LENGTH } from '../constants/index.js';

export const isSameDepartureAndArrival = (
  departureStationName,
  arrivalStationName
) => {
  return departureStationName === arrivalStationName;
};

export const isValidInputLength = (
  departureStationName,
  arrivalStationName
) => {
  return (
    departureStationName.length >= MINIMUM_STATION_NAME_LENGTH &&
    arrivalStationName.length >= MINIMUM_STATION_NAME_LENGTH
  );
};

export const isRegistredStation = (
  departureStationName,
  arrivalStationName,
  stations
) => {
  const allStationsName = stations.map(({ name }) => name);
  return (
    allStationsName.includes(departureStationName) &&
    allStationsName.includes(arrivalStationName)
  );
};

export const isConnectedStation = path => {
  return !!path;
};
