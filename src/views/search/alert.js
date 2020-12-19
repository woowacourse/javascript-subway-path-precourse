function notExistAlert(stationName) {
  let subwayDatas = JSON.parse(localStorage.getItem("subwayDatas"));

  let alertMsg = "";

  if (subwayDatas.stations.indexOf(stationName) === -1) {
    alertMsg = "존재하지 않는 역을 입력하셨습니다.";
  }
  return alertMsg;
}

function minimunLengthAlert(stationName) {
  let alertMsg = "";

  if (stationName === "") {
    alertMsg = "공백을 입력하셨습니다.";
  } else if (stationName.length < 2) {
    alertMsg = "역 이름은 2글자 이상으로 입력하셔야 합니다.";
  }

  return alertMsg;
}

export { notExistAlert, minimunLengthAlert };
