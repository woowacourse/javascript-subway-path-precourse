export const DOMTag = {
  FINDING_PATH_BUTTON_QUERY: "#search-button",
  RESULT_CONTAINER_QUERY: "#result-container",
  DEPT_INPUT_QUERY: "#departure-station-name-input",
  DEST_INPUT_QUERY: "#arrival-station-name-input",

  RADIO_BUTTON_NAME: "search-type",
};

export const ALERT = {
  SELECT_RADIO_BUTTON: "최단거리와 최소시간 중 하나를 선택해주세요!",
  DEPT_DEST_EQUAL: "출발역과 도착역이 같을 수 없습니다!",
  MINIMUM_LENGTH: "역의 이름은 최소 두 글자 이상이여야 합니다!",
  NO_STATION: `존재하지 않는 역 이름을 입력하셨습니다.
등록된 역은 다음과 같습니다.

교대, 강남, 역삼, 남부터미널, 양재, 양재시민의숲, 매봉`,
  NO_PATH: `해당 경로가 존재하지 않습니다!`,

  INTERNAL_ERROR: `실행 중 문제가 발생했습니다.
자세한 사항은 디버깅 콘솔을 참조해주십시오.`,
};

export const STRING = {
  TOTAL_DIST: "총 거리",
  TOTAL_TIME: "총 소요 시간",
  RESULT: "📝 결과",

  MIN_DISTANCE: "최단거리",
  MIN_TIME: "최소시간",
};
