import { isValidLength, isValidStation, isDuplicatedStation, isConnected } from "./line/check.js";
import Dijkstra from "../src/utils/Dijkstra.js"
import { printResult } from "./line/view.js"

const getMinimumDistance = (line, departureStationIndex, arrivalStationIndex, departureStationName, arrivalStationName) => {
  const dijkstra = new Dijkstra();
  let distance = 0;
  let time = 0;
  let i;
  for (i = departureStationIndex; i < (arrivalStationIndex); i++) {
    dijkstra.addEdge(line[i].name, line[i+1].name, line[i], line[i].distance);
    distance += line[i].distance;
    time += line[i].time;
    console.log(line[i].name, line[i+1].name, distance, time)
  }
  printResult(line, departureStationIndex, arrivalStationIndex, distance, time);
}

const getIndex = (optionValue, line, departureStationName, arrivalStationName) => {
  const arrayLine = line.map((station) => station.name)
  const departureStationIndex = arrayLine.indexOf(departureStationName);
  const arrivalStationIndex = arrayLine.indexOf(arrivalStationName);
  if (optionValue === "minimum-distance") {
    getMinimumDistance(line, departureStationIndex, arrivalStationIndex, departureStationName, arrivalStationName);
  }
}

const getOptionValue = (line, departureStationName, arrivalStationName) => {
  const options = document.getElementsByName("search-type");
  let optionValue = '';
  let i;
  for (i = 0; i < options.length; i++) {
    if (options[i].checked) {
      optionValue += options[i].value;
      getIndex(optionValue, line, departureStationName, arrivalStationName);
    }
  }
}

const onClickSearchButton = (departureStationName, arrivalStationName) => {
  const searchButton = document.querySelector("#search-button");
  searchButton.addEventListener("click", () => {
    if (isConnected(departureStationName, arrivalStationName)) {
      getOptionValue(departureStationName, arrivalStationName);
    }
  })
}

const getArrivalStationName = (departureStationName) => {
  const arrivalStationName = document.querySelector("#arrival-station-name-input");
  arrivalStationName.addEventListener("change", () => {
    if (isValidLength(arrivalStationName.value) && isValidStation(arrivalStationName.value) && !isDuplicatedStation(arrivalStationName.value)) {
      onClickSearchButton(departureStationName, arrivalStationName.value);
    } else {
      const ALERT_MESSAGE = "출발역과 중복되지 않는 이름을 입력해 주세요. 또는 출발역과 도착역이 연결되어 있는 역을 입력해 주세요."
      alert(ALERT_MESSAGE);
    }
  })
}

const getDepartureStationName = () => {
  const departureStationName = document.querySelector("#departure-station-name-input");
  departureStationName.addEventListener("change", () => {
    if (isValidLength(departureStationName.value) && isValidStation(departureStationName.value)) {
      getArrivalStationName(departureStationName.value);
    }
    else {
      const ALERT_MESSAGE = "노선에 존재하는 2글자 이상의 역 이름을 입력해 주세요.";
      alert(ALERT_MESSAGE);
    }
  })
}

const init = () => {
  const table = document.querySelector("#table");
  table.style.display = 'none';
  getDepartureStationName();
}

init();

export { getDepartureStationName, getOptionValue };