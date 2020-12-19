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
];

export const STATIONS = Array.from(
  new Set(
    LINES.map((v) => v.stations)
      .join()
      .split(',')
  )
);

export const ERROR_MESSAGES = {
  STAION_NAME_ONLY_SPACE: `🚨안 내🚨\n
  공백만으로는 지하철역을 검색할 수 없습니다.
  유효한 지하철 역 이름으로 다시 입력해주세요.`,
};
