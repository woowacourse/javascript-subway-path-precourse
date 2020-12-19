import render from "../../managers/render.js";
import app from "../app.js";

function onSearchBtnHandler() {
  let subwayDatas = JSON.parse(localStorage.getItem("subwayDatas"));
  let departure = console.log(document.getElementById("departure-station-name-input").value);
  let end = console.log(document.getElementById("arrival-station-name-input").value);

  let checkedRadioInput = checkRadioInput();
  // let timeTableData = {};
  // timeTableData.minPath = disktra
  //   timeTableData.minTime = calculateMinTime(minPath)
  // 최종 거리정보가 들어왔다고 가정하고 길찾기 페이지 구현
  let timeTableData = { minTime: 20, minDistance: 5, minPath: ["교대", "강남", "양재"] };
  render(app(timeTableData));
}

function checkRadioInput() {
  let checkedRadioInput = "";

  if (document.all("search-type")[0].checked) {
    checkedRadioInput = "최단거리";
  } else if (document.all("search-type")[1].checked) {
    checkedRadioInput = "최소시간";
  }

  return checkedRadioInput;
}

export { onSearchBtnHandler };
