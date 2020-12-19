import render from "../../managers/render.js";
import app from "../app.js";
import Dijkstra from "../../utils/Dijkstra.js";
import { validateStation, validateRadioInput } from "../search/validation.js";
import { SHORTEST_DISTANCE, DISTANCE, TIME, SUBWAY_DATAS } from "../search/const.js";

function onSearchBtnHandler() {
  let [departure, arrival] = validateStation([
    document.getElementById("departure-station-name-input").value,
    document.getElementById("arrival-station-name-input").value,
  ]);
  let checkedRadioInput = validateRadioInput(document.all("search-type"));

  showResult(departure, arrival, checkedRadioInput);
}

function showResult(departure, arrival, checkedRadioInput) {
  if (departure && arrival && checkedRadioInput) {
    let timeTableData = { totalTime: 0, totalDistance: 0, minPath: [] };

    timeTableData.minPath = makeMinPathResult(checkedRadioInput, departure, arrival);
    timeTableData.totalDistance = calculateTotalCost(timeTableData.minPath, DISTANCE);
    timeTableData.totalTime = calculateTotalCost(timeTableData.minPath, TIME);

    render(app(timeTableData, checkedRadioInput));
  } else {
    render(app());
  }
}

function calculateTotalCost(minPath, option) {
  let subwayDatas = JSON.parse(localStorage.getItem(SUBWAY_DATAS));
  let totalCost = 0;

  for (let i = 0; i < minPath.length - 1; i++) {
    subwayDatas.sections.forEach((section) => {
      totalCost += calculateEachCost(section, { minPath, i, option });
    });
  }

  return totalCost;
}

function calculateEachCost(section, datas) {
  let conditionOne = section.depart === datas.minPath[datas.i] && section.end === datas.minPath[datas.i + 1];
  let conditionTwo = section.end === datas.minPath[datas.i] && section.depart === datas.minPath[datas.i + 1];
  let eachCost = 0;

  if ((conditionOne || conditionTwo) && datas.option === DISTANCE) {
    eachCost += Number(section.distance);
  }
  if ((conditionOne || conditionTwo) && datas.option === TIME) {
    eachCost += Number(section.time);
  }

  return eachCost;
}

function makeMinPathResult(checkRadioInput, departure, arrival) {
  const dijkstra = new Dijkstra();
  let subwayDatas = JSON.parse(localStorage.getItem(SUBWAY_DATAS));

  subwayDatas.sections.forEach((section) => {
    if (checkRadioInput === SHORTEST_DISTANCE) {
      dijkstra.addEdge(section.depart, section.end, section.distance);
    } else {
      dijkstra.addEdge(section.depart, section.end, section.time);
    }
  });

  let result = dijkstra.findShortestPath(departure, arrival);

  return result;
}

export { onSearchBtnHandler };
