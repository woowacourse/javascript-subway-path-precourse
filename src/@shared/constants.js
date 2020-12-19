const UNIT = {
  KILOMETER_UNIT: "km",
  MINUTE_UNIT: "분",
};

const SEARCH_TYPE = {
  DISTANCE: "최단거리",
  MINUTE: "최소시간",
};

const NUMBER = {
  MIN_STATION_NAME_LENGTH: 2,
};

const ALERT = {
  INVALID_STATION_NAME:
    "등록된 지하철역이 아닙니다. 등록된 역만 출발역 또는 도착역으로 입력할 수 있습니다.",
  INVALID_STATION_NAME_LENGTH: "두 글자 이상 입력해주세요.",
  DUPLICATED_STATIONS: "출발역과 도착역은 다른 역으로 골라주세요.",
  FAILED_TO_FIND: "경로를 조회할 수 없습니다.",
};

export { UNIT, SEARCH_TYPE, NUMBER, ALERT };
