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

  let totalDistance = makeTotalDistance(timeTableData.minPath);
  // let totalTime = makeTotalTime(timeTableData.minPath);

  // 최단 거리 minPath 를 이용하여 totalDistance, totalTime 계산하고 렌더링

  console.log(timeTableData);
  render(app(timeTableData));
}

function makeTotalDistance(minPath) {
  let subwayDatas = JSON.parse(localStorage.getItem("subwayDatas"));

  let distance = 0;
  for (let i = 0; i < minPath.length - 1; i++) {
    subwayDatas.sections.forEach((section) => {
      let conditionOne = section.depart === minPath[i] && section.end === minPath[i + 1];
      let conditionTwo = section.end === minPath[i] && section.depart === minPath[i + 1];
      if (conditionOne || conditionTwo) {
        distance += Number(section.distance);
      }
    });
  }

  return distance;
}

// function makeTotalDistance(minPath) {
//     let subwayDatas = JSON.parse(localStorage.getItem("subwayDatas"));

//     let distance = 0;
//     for (let i = 0; i < minPath.length - 1; i++) {
//       subwayDatas.sections.forEach((section) => {
//         let conditionOne = section.depart === minPath[i] && section.end === minPath[i + 1];
//         let conditionTwo = section.end === minPath[i] && section.depart === minPath[i + 1];
//         if (conditionOne || conditionTwo) {
//           distance += Number(section.distance);
//         }
//       });
//     }

//     return distance;
//   }

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
