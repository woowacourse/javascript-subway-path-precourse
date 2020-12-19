import { onSearchBtnHandler } from "../views/search/searchManager.js";

function initHTML() {
  const mainBox = document.createElement("div");

  mainBox.innerHTML = `

   출발역<input id="departure-station-name-input"></input>
   <br />
    도착역<input id="arrival-station-name-input"></input>
    <br />
    <br />
    <input type="radio" value="최단거리" checked="checked" name="search-type">최단거리</input>
    <input type="radio" value="최소시간" name="search-type">최소시간</input>
    <br />
    <br />
    <button id="search-button">길 찾기</button>
    `;

  document.body.append(mainBox);
}

function addEventToMainBtns() {
  document.getElementById("search-button").addEventListener("click", onSearchBtnHandler);
}

export { initHTML, addEventToMainBtns };
