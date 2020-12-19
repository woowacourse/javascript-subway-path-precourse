const MIN_LENGTH_OF_NAME = 2;

const LINE_NUMBER = {
  LINE2: 2,
  LINE3: 3,
  LINE_SINBUNDANG: 4,
};

const ERROR_MESSAGE = {
  IS_EMPTY_STRING: '역을 입력해주세요',
  IS_SAME_STATION: '서로 다른 역을 입력해주세요',
  IS_TOO_SHORT_STRING: '역이름은 두 글자 이상입니다',
  IS_NOT_EXIST: '존재하지 않는 역입니다',
  IS_NOT_INPUT: '역을 먼저 입력해주세요',
};

const SEARCH_PATH_TYPE = {
  MIN_TIME: '최소시간',
  MIN_DISTANCE: '최단거리',
};

const UNIT = {
  DISTANCE: 'km',
  TIME: '분',
};

export { MIN_LENGTH_OF_NAME, ERROR_MESSAGE, LINE_NUMBER, SEARCH_PATH_TYPE, UNIT };
