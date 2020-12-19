export const DepartureError = 2;
export const ArrivalError = 3;
export const NoStationError = 4;
export const SameStationError = 5;
export const NotLinkedError = 6;

export const ErrorMsg = [
  "",
  "",
  "출발역의 입력값이 잘못되었습니다.\n한글, 숫자만 포함한 2글자 이상으로 작성해 주세요.",
  "도착역의 입력값이 잘못되었습니다.\n한글, 숫자만 포함한 2글자 이상으로 작성해 주세요.",
  "입력하신 역은 존재하지 않습니다.",
  "출발역과 도착역은 같은 값일 수 없습니다.",
  "출발역과 도착역이 연결되어 있지 않습니다."
]