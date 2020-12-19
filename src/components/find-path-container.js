import {
  makeStringToHTML,
  clearElement,
} from "../utils/display/display-utils.js";
import { lines } from "../data.js";
import Dijkstra from "../utils/Dijkstra.js";

const dijkstraTime = new Dijkstra();
const dijkstraDistance = new Dijkstra();
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
    newResult(); //min distance Path
  });
}

function newResult() {
  resultWrapper();
  const result = document.getElementById("result");
  clearElement(result);
  resultPath(result);
  resultPathTable(result);
}

function resultWrapper() {
  const resultWrapperHTML = `<div id="result"></div>`;
  app.append(makeStringToHTML(resultWrapperHTML).firstElementChild);
}

function resultPath(parent) {
  const subwayPathTitleHTML = `<h2>📝 결과</h2>`;
  parent.append(makeStringToHTML(subwayPathTitleHTML).firstElementChild);
}

function resultPathStations(result) {
  const td = document.createElement("td");
  let resultStations = "";

  for (let i = 0; i < result.length; i++) {
    resultStations += result[i];
    if (result[i + 1]) {
      resultStations += "➡";
    }
  }

  td.textContent = resultStations;
  td.colSpan = 2;

  return td;
}

function textInTd(innerText) {
  const td = document.createElement("td");
  td.textContent = innerText;

  return td;
}

function distanceAndTimeRow(...args) {
  const tr = document.createElement("tr");

  for (const text of [...args]) {
    const tdWithText = textInTd(text);
    tr.append(tdWithText);
  }

  return tr;
}

function resultPathTable(parent) {
  const subwayPathTableHTML = `
    <table border="1">
      <thead>
        <tr>
          <td><b>총 거리</b></td>
          <td><b>총 소요 시간</b></td>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
  `;
  parent.append(makeStringToHTML(subwayPathTableHTML).firstElementChild);
}

// make Edges
for (const line of lines) {
  for (const station of line.stations) {
    if (station.nextStation !== null) {
      dijkstraDistance.addEdge(
        station.name,
        station.nextStation,
        station.distance
      );
      dijkstraTime.addEdge(station.name, station.nextStation, station.time);
    }
  }
}
