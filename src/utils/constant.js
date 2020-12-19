export const Constant = {
  RESULT_CONTAINER_ID: "#result-container",
  SEARCH_BUTTON_ID: "#search-button",
  DEPARTURE_STATION_NAME_INPUT_ID: "#departure-station-name-input",
  ARRIVVAL_STATION_NAME_INPUT_ID: "#arrival-station-name-input",

  CLICK: "click",
  BLOCK: "block",

  REGEX_CATCHING_KOREAN_ALPHABET: /^[ㄱ-힣]+$/,
  MINIMUM_NAME_LENGTH: 2,
};

export const StationLine = {
  LINE_TWO: "2호선",
  LINE_THREE: "3호선",
  LINE_SINBUNDANG: "신분당선",
};

export const StationName = {
  SEOUL_NATIONAL_UNIV_OF_EDUCATION: "교대",
  GANGNAM: "강남",
  YEOKSAM: "역삼",
  NAMBU_BUS_TERMINAL: "남부터미널",
  YANGJAE: "양재",
  YANGJAE_CITIZENS_FOREST: "양재시민의숲",
  MAEBONG: "매봉",
};

export const ErrorMessage = {
  ONLY_KOREAN_ALPHABET: "역 이름은 한글만 가능합니다.",
  MINIMUM_LENGTH: "역 이름은 2글자 이상이어야 합니다.",
};
