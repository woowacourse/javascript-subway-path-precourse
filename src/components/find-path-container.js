import {
  makeStringToHTML,
  clearElement,
} from "../utils/display/display-utils.js";
import { lines } from "../data.js";
import Dijkstra from "../utils/Dijkstra.js";

const dijkstra = new Dijkstra();
const app = document.getElementById("app");

export default function findPath() {
  const subwayPathHTML = `
    <div id="find-path">
      출발역 <input id="departure-station-name-input" type="text" /> <br />
      도착역 <input id="arrival-station-name-input" type="text" /> <br />
      <input name="search-type" type="radio" checked="checked" /> 최단거리
      <input name="search-type" type="radio" /> 최소시간<br /> 
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
  minDistancePath(result);
}

function resultWrapper() {
  const resultWrapperHTML = `<div id="result"></div>`;
  app.append(makeStringToHTML(resultWrapperHTML).firstElementChild);
}

function resultPath(parent) {
  const subwayPathTitleHTML = `<h2>📝 결과</h2>`;
  parent.append(makeStringToHTML(subwayPathTitleHTML).firstElementChild);
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

// 최단경로
for (const line of lines) {
  for (let i = 0; i < line.stations.length - 2; i++) {
    dijkstra.addEdge(line.stations[i], line.stations[i + 1], line.distance[i]);
  }
}

// 최소시간
for (const line of lines) {
  for (let i = 0; i < line.stations.length - 1; i++) {
    dijkstra.addEdge(line.stations[i], line.stations[i + 1], line.time[i]);
  }
}
