export const LINES = [
  {
    name: '2호선',
    stations: ['교대', '강남', '역삼'],
    distanceInterval: [2, 2],
    timeInterval: [3, 3],
  },
  {
    name: '3호선',
    stations: ['교대', '남부터미널', '양재', '매봉'],
    distanceInterval: [3, 6, 1],
    timeInterval: [2, 5, 1],
  },
  {
    name: '신분당선',
    stations: ['강남', '양재', '양재시민의숲'],
    distanceInterval: [2, 10],
    timeInterval: [8, 3],
  },
  // {
  //   name: '1호선',
  //   stations: ['인천', '동인천'],
  //   distanceInterval: [7],
  //   timeInterval: [7],
  // },
];

export const STATIONS = Array.from(
  new Set(
    LINES.map((v) => v.stations)
      .join()
      .split(',')
  )
);

export const STATION_NAME_LEN_LIMIT = 2;

export const ERROR_MESSAGES = {
  STAION_NAME_ONLY_SPACE: `🚨안 내🚨\n
  공백만으로는 지하철역을 검색할 수 없습니다.
  유효한 지하철 역 이름으로 다시 입력해 주세요.`,
  STAION_NAME_TOO_SHORT: `🚨안 내🚨\n
  입력된 지하철역 이름이 너무 짧습니다.
  ${STATION_NAME_LEN_LIMIT}글자 이상의 지하철 역 이름으로 다시 입력해 주세요.`,
  STAION_NAME_NOT_EXIST: `🚨안 내🚨\n
  존재하지 않는 지하철역 이름입니다.
  노선에 등록되어 있는 역 이름으로 다시 입력해 주세요.\n
  [목록] ${STATIONS}`,
  BOTH_STAION_NAMES_SAME: `🚨안 내🚨\n
  출발역과 도착역은 같을 수 없습니다.
  출발역과 도착역을 서로 다르게 입력해 주세요.`,
  STATIONS_NOT_CONNECTED: `🚨안 내🚨\n
  입력해주신 출발역과 도착역은 서로 연결되있지 않습니다.
  서로 연결되어 있는 출발역과 도착역으로 입력해주세요.`,
};
