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

export const INPUT_LIMIT = {
  MIN_STATION_NAME_LENGTH: 2,
};

export const ERROR_MESSAGE = {
  SAME_DEPARTURE_TO_ARRIVAL: `출발역과 도착역이 같은 역은 입력할 수 없습니다.`,
  MIN_STATION_NAME_LENGTH: `역 이름은 최소 ${INPUT_LIMIT.MIN_STATION_NAME_LENGTH}이상이어야 합니다.`,
  NOT_EXIST_STATION_NAME: `존재하지 않는 역이름입니다.`,
};

export const TABLE_HEADER = `
<th>총 거리</th>
<th>총 소요시간</th>`;

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
  DISTANCE_RESULT_PRINT: `
  <h2>📝 결과 </h2>
  <h3> 최단 거리 </h3>
  <table id="${ID.RESULT_TABLE}" border="${CSS.TABLE_BORDER}">
    
  </table>
  `,
  DURATION_RESULT_PRINT: `
  <h2>📝 결과 </h2>
  <h3> 최소 시간 </h3>
  <table id="${ID.RESULT_TABLE}" border="${CSS.TABLE_BORDER}">
    
  </table>
  `,
};
