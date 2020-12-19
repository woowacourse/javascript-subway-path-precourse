import { makeStringToHTML } from "../utils/display/display-utils.js";

import { dijkstraTime, dijkstraDistance } from "../utils/make-edges.js";
import {
  validateInput,
  checkIfStartAndEndSame,
} from "../utils/input/validator/input-validator.js";
import { minPath, newResult } from "./find-path-result-container.js";

const app = document.getElementById("app");

export default function findPath() {
  const subwayPathHTML = `
    <div id="find-path">
      출발역 <input id="departure-station-name-input" type="text" /> <br />
      도착역 <input id="arrival-station-name-input" type="text" /> <br />
      <input name="search-type" value="distance" type="radio" checked="checked" />최단거리
      <input name="search-type" value="time" type="radio" />최소시간<br /> 
      <button id="search-button" >길 찾기</button>
    </div>
  `;
  app.append(makeStringToHTML(subwayPathHTML).firstElementChild);

  const searchButton = document.getElementById("search-button");
  searchButton.addEventListener("click", () => {
    const selected = document.querySelector('input[name="search-type"]:checked')
      .value;
    const startStation = document.getElementById("departure-station-name-input")
      .value;
    const endStation = document.getElementById("arrival-station-name-input")
      .value;
    newResult();

    if (!startStation && !endStation) {
      return checkIfStartAndEndSame(startStation, endStation);
    }

    if (validateInput(startStation) && validateInput(endStation)) {
      if (selected === "distance") {
        minPath(dijkstraDistance, startStation, endStation);
      } else if (selected === "time") {
        minPath(dijkstraTime, startStation, endStation);
      }
    }
  });
}
