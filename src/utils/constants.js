export const TITLE_TEXT = {
  app: "🚇 지하철 길찾기",
  searchResult: "📝 결과",
};

export const FORM_ELEMENT = {
  departureStationInput: {
    text: "출발역",
    id: "departure-station-name-input",
  },
  arrivalStationInput: {
    text: "도착역",
    id: "arrival-station-name-input",
  },
  searchButton: {
    text: "길 찾기",
    id: "search-button",
  },
};

export const UNITS = {
  distance: "km",
  time: "분",
};

export const STATION_NAME_MIN_LENGTH = 2;

export const ERROR_MESSAGE = {
  shortStationName: `⚠ ${STATION_NAME_MIN_LENGTH}자 이상의 지하철역 이름을 입력해주세요.`,
  invalidStationName: (stationName) => `⚠ 입력하신 ${stationName}역은 존재하지 않는 지하철역입니다.`,
  sameDepartureArrivalStationName: "⚠ 출발역과 도착역이 서로 같습니다.",
};
