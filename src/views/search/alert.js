function notExistAlert(inputValue) {
  let subwayDatas = JSON.parse(localStorage.getItem("subwayDatas"));

  let alertMsg = "";

  if (inputValue === "") {
    alertMsg = "공백을 입력하셨습니다.";
  } else if (subwayDatas.stations.indexOf(inputValue) === -1) {
    alertMsg = "존재하지 않는 역을 입력하셨습니다.";
  }
  return alertMsg;
}

export { notExistAlert };
