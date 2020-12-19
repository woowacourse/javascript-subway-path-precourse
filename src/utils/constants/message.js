import { NUM } from "./number.js";

export const MESSAGE = {
  EMPTY_NAME_ERROR: `이름을 입력해주세요.`,
  STATION_NAME_LIMIT_ERROR: `이름은 ${NUM.STATION_NAME_LIMIT}글자 이상이어야 합니다.`,
  SAME_STATION_SELECT_ERROR: `출발지와 도착지는 달라야합니다.`,
  NOT_FOUND_PATH_ERROR: `경로가 존재하지 않습니다.`,
  NOT_FOUND_STATION_ERROR: `존재하지 않는 역이름입니다.`,
};
