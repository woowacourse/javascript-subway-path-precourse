const parser = new DOMParser();

function makeStringToHTML(string) {
  return parser.parseFromString(string, "text/html").body;
}

// 첫 화면 그리기
function subwayPath() {
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
}

new subwayPath();

// 결과 화면 그리기 table을 만들어야 함
function resultPath() {
  const app = document.getElementById("app");
  const subwayPathHTML = `
    <div id="result">
      <h2>📝 결과</h2> 
    </div>
  `;
  app.append(makeStringToHTML(subwayPathHTML).firstElementChild);
}
