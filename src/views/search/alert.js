import { SUBWAY_DATAS } from "./const.js";

function notExistAlert(stationNames) {
  let subwayDatas = JSON.parse(localStorage.getItem(SUBWAY_DATAS));
  let alertMsg = "";

  if (subwayDatas.stations.indexOf(stationNames[0]) === -1 || subwayDatas.stations.indexOf(stationNames[1]) === -1) {
    alertMsg = "존재하지 않는 역을 입력하셨습니다.";
  }

  return alertMsg;
}

function minimunLengthAlert(stationNames) {
  let alertMsg = "";

  if (stationNames[0] === "" || stationNames[1] === "") {
    alertMsg = "공백을 입력하셨습니다.";
  } else if (stationNames[0].length < 2 || stationNames[1].length < 2) {
    alertMsg = "역 이름은 2글자 이상으로 입력하셔야 합니다.";
  }

  return alertMsg;
}

function sameDepartArrivalAlert(stationNames) {
  let alertMsg = "";

  if (stationNames[0] === stationNames[1]) {
    alertMsg = "출발역과 도착역으로 동일한 역을 입력하셨습니다.";
  }

  return alertMsg;
}

export { notExistAlert, minimunLengthAlert, sameDepartArrivalAlert };
