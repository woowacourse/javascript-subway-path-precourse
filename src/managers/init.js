function initHTML() {
  const mainBox = document.createElement("div");

  mainBox.innerHTML = `

   출발역<input id="departure-station-name-input"></input>
   <br />
    도착역<input id="arrival-station-name-input"></input>
    <br />
    <br />
    <input type="radio" checked="checked" name="search-type">최단거리</input>
    <input type="radio" name="search-type">최소시간</input>
    <br />
    <br />
    <button id="search-button">길 찾기</button>
    `;

  document.body.append(mainBox);
}

export { initHTML };
