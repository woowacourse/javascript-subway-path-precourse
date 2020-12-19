import {
  makeStringToHTML,
  clearElement,
} from "../utils/display/display-utils.js";
import { lines } from "../data.js";

export function newResult() {
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

export function minPath(distanceOrTimeDijkstra, startStation, endStation) {
  const tbody = document.getElementsByTagName("tbody")[0];
  const shortestDistance = distanceOrTimeDijkstra.findShortestPath(
    startStation,
    endStation
  );

  tbody.append(
    distanceAndTimeRow(
      totalDistance(shortestDistance)[0],
      totalDistance(shortestDistance)[1]
    ),

    resultPathStations(shortestDistance)
  );

  return shortestDistance;
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

function totalDistance(result) {
  const totalDistanceAndTimeArray = [];
  let totalDistances = 0;
  let totalTimes = 0;

  for (const line of lines) {
    for (const station of line.stations) {
      for (let i = 0; i < result.length - 1; i++) {
        if (
          (result[i] === station.name &&
            result[i + 1] === station.nextStation) ||
          (result[i] === station.nextStation && result[i + 1] === station.name)
        ) {
          totalDistances += station.distance;
          totalTimes += station.time;
        }
      }
    }
  }

  totalDistanceAndTimeArray.push(totalDistances + "km", totalTimes + "분");

  return totalDistanceAndTimeArray;
}
