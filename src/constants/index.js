const stations = ['교대', '강남', '역삼', '남부터미널', '양재', '매봉', '양재시민의숲'];

const courses = {
  교대: [
    ['강남', 2, 3],
    ['남부터미널', 3, 2],
  ],
  강남: [
    ['역삼', 2, 3],
    ['교대', 2, 3],
    ['양재', 2, 8],
  ],
  역삼: [['강남', 2, 3]],
  남부터미널: [
    ['교대', 3, 2],
    ['양재', 6, 5],
  ],
  양재: [
    ['남부터미널', 6, 5],
    ['매봉', 1, 1],
    ['강남', 2, 8],
    ['양재시민의숲', 10, 3],
  ],
  매봉: [['양재', 1, 1]],
  양재시민의숲: [['양재', 10, 3]],
};

const message = {
  TITLE: '🚇 지하철 길찾기',
  START_STATION: '출발역',
  END_STATION: '도착역',
  SHORTEST_DISTANCE: '최단거리',
  MINIMUN_TIME: '최소시간',
  SEARCH: '길 찾기',
  RESULT: '결과',
  ENTIRE_DISTANCE: '총 거리',
  ENTIRE_TIME: '총 소요 시간',
  KM: 'km',
  MINUTES: '분',
  SHORTER_THAN_TWO: '역 이름은 2글자 이상이어야합니다',
  OVERLAPTED_STATION: '출발역과 도착역 이름이 중복됩니다.',
  IS_NOT_IN_COURSES: '츨발역 혹은 도착역이 어느 노선에서도 존재하지 않습니다.',
};

export { courses, stations, message };
