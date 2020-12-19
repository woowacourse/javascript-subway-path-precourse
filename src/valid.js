const STATION_NAME_MINIMUM = 2;
const ERROR_UNDER_MINIMUM_LENGTH = `역 이름은 ${STATION_NAME_MINIMUM}글자 이상이어야 합니다.`;
const ERROR_STATION_NOT_EXISTS = `역 이름이 데이터에 존재하지 않습니다`;
const ERROR_DEPARTURE_EQUALS_ARRIVAL = `출발역과 도착역이 동일할 수 없습니다.`;
const ERROR_PATH_NOT_EXISTS = `입력한 역들이 연결되어 있지 않습니다.`;

const isUnderMinimumLength = name => name.length < STATION_NAME_MINIMUM;

const isStationNotExists = (stations, station) => !stations.includes(station);

const isDepartureEqualsArrival = (departure, arrival) => departure === arrival;

export const isStationsValid = (stations, departure, arrival) => {
  if (isUnderMinimumLength(departure) || isUnderMinimumLength(arrival)) {
    throw Error(ERROR_UNDER_MINIMUM_LENGTH);
  } else if (isStationNotExists(stations, departure)) {
    throw Error(`${ERROR_STATION_NOT_EXISTS}: ${departure}`);
  } else if (isStationNotExists(stations, arrival)) {
    throw Error(`${ERROR_STATION_NOT_EXISTS}: ${arrival}`);
  } else if (isDepartureEqualsArrival(departure, arrival)) {
    throw Error(ERROR_DEPARTURE_EQUALS_ARRIVAL);
  }
};

export const isPathValid = path => {
  if (!path) {
    throw Error(ERROR_PATH_NOT_EXISTS);
  }
};
