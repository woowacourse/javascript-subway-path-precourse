export const ID = {
  APP: "app",
  STATION_NAME_INPUT_CONTINAER: "station-name-input-container",
  DEPARTURE_STATION_NAME_INPUT: "departure-station-name-input",
  ARRIVAL_STATION_NAME_INPUT: "arrival-station-name-input",
  SEARCH_BUTTON: "search-button",

  RESULT_PRINT_CONTAINER: "result-print-container",
};

export const NAME = {
  SEARCH_TYPE: "search-type",
};

export const VALUE = {
  DISTANCE: "distance",
  DURATION: "duration",
}

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
};
