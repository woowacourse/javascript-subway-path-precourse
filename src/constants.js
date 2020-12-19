const CONSTANTS = {
  'APP': {'ID': 'app'},
  'INPUT': {
    'START': {'ID': 'departure-station-name-input'},
    'END': {'ID': 'arrival-station-name-input'},
  },
  'RADIO': {
    'NAME': 'search-type',
  },
  'SEARCH_TYPE': {
    'MIN_DISTANCE': '최단거리',
    'MIN_TIME': '최소시간',
  },
  'BUTTON': {'ID': 'search-button'},
  'RESULT': {'ID': 'search-result'},
  'ALERT': {
    'DUPLICATION': '출발역과 도착역을 다르게 입력해주세요.',
    'NOT_EXIST': '존재 하지 않는 역이에요.',
    'MIN_LENGTH': '역 이름은 2글자 이상으로 입력해주세요.',
    'NOT_LINKED': '노선이 연결되어 있지 않아요.',
  },
};

export const {
  APP, INPUT, RADIO, SEARCH_TYPE, BUTTON, RESULT, ALERT,
} = CONSTANTS;
