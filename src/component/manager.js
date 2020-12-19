import { ALERT, DOMTag } from "../consts/consts.js";
import { renderer } from "./renderer.js";
import {
  dijkstra_distance,
  dijkstra_time,
  stationToStation,
  stationData,
} from "../index.js";

export const startManager = () => {
  const findingPathButton = document.querySelector(
    DOMTag.FINDING_PATH_BUTTON_QUERY
  );

  findingPathButton.addEventListener("click", () => {
    try {
      buttonHandler();
    } catch (e) {
      console.error(e);
      alert(ALERT.INTERNAL_ERROR);
    }
  });
};

const buttonHandler = () => {
  let type = checkedButtonType();

  const deptStation = document.querySelector(DOMTag.DEPT_INPUT_QUERY).value;
  const destStation = document.querySelector(DOMTag.DEST_INPUT_QUERY).value;

  if (buttonValidator(type, deptStation, destStation)) {
    const dijkstraData = runDijkstra(type, deptStation, destStation);
    if (!dijkstraData) {
      alert(ALERT.NO_PATH);
      return;
    }
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
  else if (dept === dest) alert(ALERT.DEPT_DEST_EQUAL);
  else if (dept.length < 2 || dest.length < 2) alert(ALERT.MINIMUM_LENGTH);
  else if (!(findStation(dept) && findStation(dest))) alert(ALERT.NO_STATION);
  else return true;

  return false;
};

const findStation = (station) => {
  return stationData.includes(station);
};

const runDijkstra = (type, dept, dest) => {
  let path;
  if (type === "distance")
    path = dijkstra_distance.findShortestPath(dept, dest);
  else if (type === "time") path = dijkstra_time.findShortestPath(dept, dest);

  if (!path) return;

  return [...totalPathData(path), path];
};

const totalPathData = (path) => {
  let time = 0,
    dist = 0;
  for (let idx = 0; idx < path.length - 1; idx++) {
    time += stationToStation[path[idx]][path[idx + 1]].time;
    dist += stationToStation[path[idx]][path[idx + 1]].dist;
  }

  return [dist, time];
};
