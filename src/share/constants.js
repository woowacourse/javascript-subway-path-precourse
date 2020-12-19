export const FORM = Object.freeze({
  CONTAINER: 'search-form',
  DEPARTURE_STATION_NAME_INPUT: 'departure-station-name-input',
  ARRIVAL_STATION_NAME_INPUT: 'arrival-station-name-input',
  SEARCH_TYPE_DISTANCE_RADIO: 'search-type-distance',
  SEARCH_TYPE_TIME_RADIO: 'search-type-time',
  SEARCH_BUTTON_BUTTON: 'search-button',
});

export const RESULT = Object.freeze({
  CONTAINER: 'search-result',
  RESULT_HEADER: 'result-header',
  RESULT_TYPE: 'result-type',
  RESULT_TABLE_BODY: 'result-table-body',
});

export const ERROR_MESSAGE = Object.freeze({
  NO_DEPARTURE_STATION: '노선에 출발역이 포함되어 있지 않습니다.',
  NO_ARRIVAL_STATION: '노선에 도착역이 포함되어 있지 않습니다.',
  MIN_STATION_NAME: '역 이름은 최소 두글자 이상이어야 합니다. ',
  SAME_STATION: '출발역과 도착역은 같을 수 없습니다.',
});
