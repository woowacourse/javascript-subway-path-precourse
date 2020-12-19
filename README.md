# 🚇 지하철 노선도 경로 조회 미션

- 등록된 지하철 노선도에서 경로를 조회하는 기능을 구현한다.

## 구현 기능 목록

### 초기 설정

- 프로그램 시작 시 역, 노선, 구간 데이터를 초기 설정 해야 한다.
- 거리 : 양의정수, 단위 km
- 소요시간 조건: 양의정수, 단위 분
- 아래의 사전 등록 정보로 반드시 초기 설정을 한다.

```
1. 지하철역으로 교대, 강남, 역삼, 남부터미널, 양재, 양재시민의숲, 매봉 역 정보가 등록되어 있다.
2. 지하철 노선으로 2호선, 3호선, 신분당선이 등록되어 있다.
3. 노선에 역이 아래와 같이 등록되어 있다.(왼쪽 끝이 상행 종점)
    - 2호선: 교대 - ( 2km / 3분 ) - 강남 - ( 2km / 3분 ) - 역삼
    - 3호선: 교대 - ( 3km / 2분 ) - 남부터미널 - ( 6km / 5분 ) - 양재 - ( 1km / 1분 ) - 매봉
    - 신분당선: 강남 - ( 2km / 8분 ) - 양재 - ( 10km / 3분 ) - 양재시민의숲
```

<!-- - Dijkstra.js 라이브러리 활용
  - 초기설정에서 모든 edge를 더해야 한다. `.addEdge(출발역, 도착역, 거리)` -->

### 경로 조회 기능

- [x] 출발역과 도착역을 입력받는다.
- [x] 최단거리 또는 최소시간 옵션을 선택한다.
- [x] 길찾기 버튼을 눌러 실행한다.

- 경로 조회 기능

  - Dijkstra.js 라이브러리를 활용한다.
  - 모든 가능한 경로를 찾는다.
  - 경로 내 시간 / 거리를 모두 더한다.`.addEdge(출발역, 도착역, 거리)`
  - 최단거리/최소시간을 찾는다. `findShortestPath`

- 출력한다: 선택한 옵션, 총 거리, 총 소요시간, 경로

### 입력값 예외 처리

- 출발역과 도착역은 2글자 이상이어야 한다.
- 존재하지 않는 역을 입력할 수 없다.
- 경로 조회 시 출발역과 도착역을 다르게 해야한다.
- 경로 조회 시 출발역과 도착역이 연결되지 않으면 경로를 조회할 수 없다.
- 그 외 정상적으로 프로그램이 수행되지 않은 경우 `alert`으로 에러를 출력한다.

### HTML Element

- 출발역을 입력하는 input 태그 id: `departure-station-name-input`
- 도착역을 입력하는 input 태그 id: `arrival-station-name-input`
- 최단거리, 최소시간을 선택하는 radio의 name 속성: `search-type`
- radio option의 default 값은 최단거리이다.
- 길찾기 버튼 id: `search-button`
- 결과는 `table`을 이용하여 보여준다.
