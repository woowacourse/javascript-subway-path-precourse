export const WORDS = {
  SEARCH_RESULT_TITLE: "📝 결과",

  TYPE_DISTANCE_EN: "distance",
  TYPE_TIME_EN: "time",

  TYPE_DISTANCE_KO: "최단거리",
  TYPE_TIME_KO: "최소시간",

  LIST_COL_NAME: ["총 거리", "총 소요시간"],
};

export const SYMBOL = {
  ARROW_RIGHT: " ➡ ",
};

export const LINE = {
  TWO: "2호선",
  THREE: "3호선",
  NEW_BUNDANG: "신분당선",
};

export const INITIAL_STATION = [
  "교대",
  "강남",
  "역삼",
  "남부터미널",
  "양재",
  "양재시민의숲",
  "매봉",
];

export const STATION = {
  // 시간
  EDUCATION_T: "교대T",
  GANGNAM_T: "강남T",
  YEOKSAM_T: "역삼T",
  SOUTH_TERMINAL_T: "남부터미널T",
  YANGJAE_T: "양재T",
  YANGJAE_FOREST_T: "양재시민의숲T",
  MAEBONG_T: "매봉T",

  // 거리
  EDUCATION_D: "교대D",
  GANGNAM_D: "강남D",
  YEOKSAM_D: "역삼D",
  SOUTH_TERMINAL_D: "남부터미널D",
  YANGJAE_D: "양재D",
  YANGJAE_FOREST_D: "양재시민의숲D",
  MAEBONG_D: "매봉D",
};

export const TIME = {
  EDUCATION_TO_GANGNAM: 2,
  GANGNAM_TO_YEOKSAM: 3,

  EDUCATION_TO_SOUTHT: 2,
  SOUTHT_TO_YANGJAE: 5,
  YANGJAE_TO_MAEBONG: 1,

  GANGNAM_TO_YANGJAE: 8,
  YANGJAE_TO_YANGJAEF: 3,
};

export const DISTANCE = {
  EDUCATION_TO_GANGNAM: 2,
  GANGNAM_TO_YEOKSAM: 2,

  EDUCATION_TO_SOUTHT: 3,
  SOUTHT_TO_YANGJAE: 6,
  YANGJAE_TO_MAEBONG: 1,

  GANGNAM_TO_YANGJAE: 2,
  YANGJAE_TO_YANGJAEF: 10,
};

export const MESSAGE = {
  BLANK: "공백없이 입력해주세요.",
  EMPTY: "역을 입력해주세요.",
  EXIST: "현재 존재하지 않는 역을 입력하셨습니다.",
};

export const UNIT = {
  KM: "km",
  MINUTE: "분",
};
export const UNIT_STRING = {
  KM: "걸리는 거리 : ",
  MINUTE: "걸리는 시간 : ",
};
