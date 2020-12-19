const STATION_NAME_MINIMUM = 2;
const ERROR_UNDER_MINIMUM_LENGTH = `역 이름은 ${STATION_NAME_MINIMUM}글자 이상이어야 합니다.`;
const ERROR_STATION_NOT_EXISTS = `역 이름이 데이터에 존재하지 않습니다`;
const ERROR_DEPARTURE_EQUALS_ARRIVAL = `출발역과 도착역이 동일할 수 없습니다.`;
const ERROR_PATH_NOT_EXISTS = `입력한 역들이 연결되어 있지 않습니다.`;

const isUnderMinimumLength = name => name.length < STATION_NAME_MINIMUM;

const isStationNotExists = (stations, station) => !stations.includes(station);

const isDepartureEqualsArrival = (departure, arrival) => departure === arrival;

export const isStationNamesValid = (
  stations,
  departureStation,
  arrivalStation
) => {
  if (
    isUnderMinimumLength(departureStation) ||
    isUnderMinimumLength(arrivalStation)
  ) {
    throw Error(ERROR_UNDER_MINIMUM_LENGTH);
  } else if (isStationNotExists(stations, departureStation)) {
    throw Error(`${ERROR_STATION_NOT_EXISTS}: ${departureStation}`);
  } else if (isStationNotExists(stations, arrivalStation)) {
    throw Error(`${ERROR_STATION_NOT_EXISTS}: ${arrivalStation}`);
  } else if (isDepartureEqualsArrival(departureStation, arrivalStation)) {
    throw Error(ERROR_DEPARTURE_EQUALS_ARRIVAL);
  }
};

export const isPathValid = path => {
  if (!path) {
    throw Error(ERROR_PATH_NOT_EXISTS);
  }
};
