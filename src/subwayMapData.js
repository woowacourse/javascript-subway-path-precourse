export const lines = [
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

export const stations = Array.from(
  new Set(
    lines
      .map((v) => v.stations)
      .join()
      .split(',')
  )
);

// 1. 지하철역으로 교대, 강남, 역삼, 남부터미널, 양재, 양재시민의숲, 매봉 역 정보가 등록되어 있다.
// 2. 지하철 노선으로 2호선, 3호선, 신분당선이 등록되어 있다.
// 3. 노선에 역이 아래와 같이 등록되어 있다.(왼쪽 끝이 상행 종점)
//     - 2호선: 교대 - ( 2km / 3분 ) - 강남 - ( 2km / 3분 ) - 역삼
//     - 3호선: 교대 - ( 3km / 2분 ) - 남부터미널 - ( 6km / 5분 ) - 양재 - ( 1km / 1분 ) - 매봉
//   - 신분당선: 강남 - (2km / 8분 ) - 양재 - (10km / 3분 ) - 양재시민의숲

//   addEge(교대, 강남, 2km)
//   addEge(교대, 남부터미널, 3km)
//   addEge(남부터미널, 양재, 6km)
//   addEge(양재, 양재시민의숲, 10km)
