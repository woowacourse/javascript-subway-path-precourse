import { ALERT, DOMTag } from "../consts/consts.js";
import { renderer } from "./renderer.js";

import {
  dijkstra_distance,
  dijkstra_time,
  stationToStation,
} from "../index.js";

export const startManager = () => {
  const findingPathButton = document.querySelector(
    DOMTag.FINDING_PATH_BUTTON_QUERY
  );

  findingPathButton.addEventListener("click", buttonHandler);
};

const buttonHandler = () => {
  let type = checkedButtonType();

  const deptStation = document.querySelector(DOMTag.DEPARTURE_INPUT_QUERY)
    .value;
  const destStation = document.querySelector(DOMTag.DESTINATION_INPUT_QUERY)
    .value;

  if (buttonValidator(type, deptStation, destStation)) {
    const dijkstraData = runDijkstra(type, deptStation, destStation);
    renderer(type, dijkstraData);
  }
};

const checkedButtonType = () => {
  let type;

  const radioButtons = document.getElementsByName(DOMTag.RADIO_BUTTON_NAME);
  for (let idx = 0; idx < radioButtons.length; idx++) {
    if (radioButtons[idx].checked) type = radioButtons[idx].value;
  }

  return type;
};

const buttonValidator = (value, dept, dest) => {
  if (!value) alert(ALERT.SELECT_RADIO_BUTTON);
  else return true;

  return false;
};

export const runDijkstra = (type, dept, dest) => {
  let path;
  if (type === "distance")
    path = dijkstra_distance.findShortestPath(dept, dest);
  else if (type === "time") path = dijkstra_time.findShortestPath(dept, dest);

  return [...totalPathData(path), path];
};

const totalPathData = (path) => {
  console.log(stationToStation);

  let time = 0,
    dist = 0;
  for (let idx = 0; idx < path.length - 1; idx++) {
    time += stationToStation[path[idx]][path[idx + 1]].time;
    dist += stationToStation[path[idx]][path[idx + 1]].dist;
  }

  return [dist, time];
};
