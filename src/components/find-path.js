import {
  makeStringToHTML,
  clearElement,
} from "../utils/display/display-utils.js";

export default function findPath() {
  const app = document.getElementById("app");
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
    resultWrapper();
    const result = document.getElementById("result");
    clearElement(result);
    resultPath(result);
  });
}

function resultWrapper() {
  const resultWrapperHTML = `<div id="result"></div>`;
  app.append(makeStringToHTML(resultWrapperHTML).firstElementChild);
}

function resultPath(parent) {
  const subwayPathTitleHTML = `<h2>📝 결과</h2>`;
  parent.append(makeStringToHTML(subwayPathTitleHTML).firstElementChild);
}
