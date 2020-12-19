import { constant } from "./constant.js";

export const alertMessage = {
  SHORT_LENGTH_ERROR: `역 이름은 최소 ${constant.minLength} 글자 이상 입력해야 합니다.`,
  SAME_DESTINATION_ERROR: `출발역과 도착역이 같습니다`,
  NONE_SELECTED_RADIO: `최단거리와 최소시간 중 하나를 선택해주세요!`,
  NOT_EXIST_STATION: `존재하지 않는 역이 입력되었습니다.`,
  NOT_CONNECTED_LINE: `출발역과 도착역이 서로 연결되어 있지 않습니다.`,
};
