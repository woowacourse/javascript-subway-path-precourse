import render from "../../managers/render.js";
import app from "../app.js";
import Dijkstra from "../../utils/Dijkstra.js";

function onSearchBtnHandler() {
  let subwayDatas = JSON.parse(localStorage.getItem("subwayDatas"));
  let departure = document.getElementById("departure-station-name-input").value;
  let arrival = document.getElementById("arrival-station-name-input").value;
  let checkedRadioInput = checkRadioInput();

  let timeTableData = { totalTime: 0, totalDistance: 0, minPath: [] };

  timeTableData.minPath = makeMinPathResult(checkedRadioInput, departure, arrival);

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

function makeMinPathResult(checkRadioInput, departure, arrival) {
  let subwayDatas = JSON.parse(localStorage.getItem("subwayDatas"));

  const dijkstra = new Dijkstra();

  subwayDatas.sections.forEach((section) => {
    if (checkRadioInput === "최단거리") {
      dijkstra.addEdge(section.depart, section.end, section.distance);
    } else {
      dijkstra.addEdge(section.depart, section.end, section.time);
    }
  });

  let result = dijkstra.findShortestPath(departure, arrival);
  console.log(result, dijkstra);
  return result;
}
export { onSearchBtnHandler };
