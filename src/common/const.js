export const ID = {
  APP: "app",
  STATION_NAME_INPUT_CONTINAER: "station-name-input-container",
  DEPARTURE_STATION_NAME_INPUT: "departure-station-name-input",
  ARRIVAL_STATION_NAME_INPUT: "arrival-station-name-input",
  SEARCH_BUTTON: "search-button",

  RESULT_PRINT_CONTAINER: "result-print-container",
  RESULT_TABLE: "result-table",
};

export const NAME = {
  SEARCH_TYPE: "search-type",
};

export const VALUE = {
  DISTANCE: "distance",
  DURATION: "duration",
};

export const CSS = {
  TABLE_BORDER: 1,
  TABLE_COLSPAN: 2,
};

export const TEMPLATE = {
  STATION_NAME_INPUT: `
    <p>
      <span>출발역</span> <input id="${ID.DEPARTURE_STATION_NAME_INPUT}" type="text"/>
    </p>
    <p>
      <span>도착역</span> <input id="${ID.ARRIVAL_STATION_NAME_INPUT}" type="text"/>
    </p>
    <p>
      <label><input type="radio" name="${NAME.SEARCH_TYPE}" value="${VALUE.DISTANCE}" checked="checked">최단거리</label>
      <label><input type="radio" name="${NAME.SEARCH_TYPE}" value="${VALUE.DURATION}">최소시간</label>
    </p>
    <button id="${ID.SEARCH_BUTTON}">길찾기</button> 
    `,
  RESULT_PRINT: `
  <h2>📝 결과 </h2>
  <h3> 최단 거리 </h3>
  <table id="RESULT_TABLE" border="1">
    <th>총 거리</th>
    <th>총 소요시간</th>
    <tr>
      <td>거리</td>
      <td>시간</td>
    </tr>
    <tr>
      <td colspan ="2">경로가 나옵니다</td>
    </tr>
  </table>
  `,
};
