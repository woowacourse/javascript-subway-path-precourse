# 지하철 노선도 경로 조회 미션

## 구현할 기능 목록

1. 프로그램(App)의 UI구조
   - App은 Header, Input, Result로 구성되어 있다.
   - [x] Header는 `🚇 지하철 길찾기`헤더이다.
   - [ ] Input은
     - 출발역 입력 input태그(`#departure-station-name-input`), 
     - 도착역 입력 input태그(`#arrival-station-name-input`), 
     - 최단거리・최소시간 Radio button(`name="search-type"`) 
     - 길 찾기 버튼(`#search-button`)
     으로 구성되어 있다.
   - [ ] Result는 `📝 결과`헤더, `최단거리` or `최소시간` 헤더, 총 거리, 총 소요시간, 경로를 보여주는 Table으로 구성되어 있다.
     - [ ] Input이 입력되지 않은 경우, Result는 표시되지 않는다.