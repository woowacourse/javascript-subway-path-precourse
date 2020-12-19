export const constants = {
  MINIMUM_STATION_NAME_LENGTH: 2,
};

export const alertMessage = {
  SHORT_STATION_NAME_LENGTH: `역 이름은 ${constants.MINIMUM_STATION_NAME_LENGTH} 글자 이상 입력해주세요!`,
  NO_EXIST_IN_STATION_LIST: '역 목록에 존재하지 않는 역입니다!',
  SPACE_IN_STATION_NAME: '띄어쓰기 없이 입력해주세요!',
  SAME_STATION: '출발역과 도착역은 같을 수 없습니다!',
  STATIONS_IN_DIFFERENT_LINE: '출발역과 도착역은 같은 노선에 있어야 합니다!',
};
