# 기능 구현 목록

1. 데이터 초기화
   1. data.js에 정리하기
   2. 지하철 역: 교대, 강남, 역삼, 남부터미널, 양재, 양재시민의숲, 매봉
   3. 지하철 노선: 2호선, 3호선, 신분당선
      - 2호선: 교대 - (2km / 3분) - 강남 - (2km / 3분) - 역삼
      - 3호선: 교대 - (3km / 2분) - 남부터미널 - (6km / 5분) - 양재 - (1km / 1분) - 매봉
      - 신분당선: 강남 - (2km / 8분) - 양재 - (10km / 3분) - 양재시민의숲
2. 경로 조회
   1. `getFromStation`: 출발역 입력 받기 함수
   2. `getToStation`: 도착역 입력 받기 함수
   3. `getOption`: 최단거리 or 최소시간 선택 함수
3. 예외 처리 (<u>밑줄의 경우</u>에만 로직 처리)
   1. `vaildStationNameLength`: 출발역/도착역 이름이 2글자 이상인지 확인하는 함수
      (<u>true: 2글자 이상,</u> false: 2글자 미만)
   2. `notExsistStation`: 존재하지 않는 역 여부 확인 함수
      (true: 존재하지 않는 역, <u>false: 존재하는 역</u>)
   3. `sameStation`: 출발역/도착역 이름이 같은지 확인하는 함수
      (true: 같음, <u>false: 같지 않음</u>)
   4. `connected`: 출발역과 도착역이 연결되었는지 확인하는 함수
      (<u>true: 연결됨</u>, false: 연결되지 않음)
   5. `alertError`: 그 외 정상적이지 않은 프로그램 수행 알림 함수
4. 길찾기 관련 기능
   1. 출발역 input 태그 id 속성값: `departure-station-name-input`
   2. 도착역 input 태그 id 속성값: `arrival-station-name-input`
   3. 최소시간/최단거리 선택 radio의 name 속성값: `search-type`
      - radio option의 기본값: `최단거리`
   4. 길찾기 버튼 id 속성값: `search-button`
   5. 결과 출력: `table`
5. 최단 경로 라이브러리: `utils/Dijkstra.js`에 정리되어 있음