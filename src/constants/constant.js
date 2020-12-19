const message = {
  ALERT_NOT_ENOUGH_LENGTH: "입력한 역 이름이 2글자 미만입니다",
  ALERT_NAME_EQUAL: "입력한 출발역과 도착역이 동일합니다",
  ALERT_NOT_IN_STATIONS: "입력한 역명이 지하철 역에 존재하지 않습니다",
  ALERT_NOT_CONNECTED_STATION: "입력한 두 역이 노선상 연결되어 있지 않습니다",
};

const text = {
  MIN_LENGTH: "최단거리",
  MIN_TIME: "최소시간",
};

const value = {
  STATION_NAME_MIN_LENGTH: 2,
  LINE_NODE_INDEX: 0,
  LINE_LENGTH_INDEX: 1,
  LINE_WEIGHT_INDEX: 2,
};

export { message, text, value };
