export const commonConsts = {
  IS_TRUE: 1,
  IS_FALSE: 0,
};

export const inputConsts = {
  MAIN_TITLE_TEXT: '<h1>🚇 지하철 길찾기</h1>',
  MAIN_IDNAME: 'app',
  INPUT_AREA_IDNAME: 'input-area',
  INPUT_TITLE_TAG: 'span',
  DEPARTURE_TITLE_CONTENT: '출발역',
  ARRIVAL_TITLE_CONTENT: '도착역',
  DEPARTURE_TITLE_IDNAME: 'departure-title',
  ARRIVAL_TITLE_IDNAME: 'arrival-title',
  DEPARTURE_INPUT_IDNAME: 'departure-station-name-input',
  ARRIVAL_INPUT_IDNAME: 'arrival-station-name-input',
  RADIO_AREA_IDNAME: 'radio-area',
  RADIO_NAME: 'search-type',
  RADIO_ATTRIBUTE: 'type',
  RADIO_ATTRIBUTE_NAME: 'radio',
  RADIO_DISTANCE_IDNAME: 'radio-distance',
  RADIO_TIME_IDNAME: 'radio-time',
  RADIO_DISTANCE_TEXT: '최단거리',
  RADIO_TIME_TEXT: '최소시간',
  RADIO_MARGIN: '0 4px 0 6px',
  SEARCH_BUTTON_IDNAME: 'search-button',
  SEARCH_BUTTON_TEXT: '길 찾기',
  BUTTON_MARGIN: '0 2px 0 2px',
  DEPARTURE_DOES_NOT_EXIST_ERROR_MESSAGE:
    '존재하지 않는 출발역입니다. 존재하는 출발역을 입력해주세요',
  ARRIVAL_DOES_NOT_EXIST_ERROR_MESSAGE:
    '존재하지 않는 도착역입니다. 존재하는 도착역을 입력해주세요',
  SAME_DEPARTURE_ARRIVAL_ERROR_MESSAGE:
    '출발역과 도착역이 같습니다. 다르게 입력해주세요',
  NOT_CONNECTED_ERROR_MESSAGE:
    '출발역과 도착역이 연결되어 있지 않아 경로를 구할 수 없습니다.',
};

export const resultConsts = {
  RESULT_AREA_IDNAME: 'result-area',
  RESULT_TITLE_TAG: 'h2',
  RESULT_TITLE_TEXT: '📝 결과',
  SEARCH_TYPE_TITLE_TAG: 'h3',
  SEARCH_TYPE_TITLE_IDNAME: 'search-type-title',
  TABLE_IDNAME: 'result-table',
  DISTANCE_ROW_TITLE: '총 거리',
  TIME_ROW_TITLE: '총 소요 시간',
};
