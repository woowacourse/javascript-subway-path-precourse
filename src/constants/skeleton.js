export const INIT = `
  <h1>🚇 지하철 길찾기</h1>
  <div class="bottom-margin">
    <label>출발역</label>
    <input id="departure-station-name-input" />
  </div>
  <div class="bottom-margin">
    <label>도착역</label>
    <input id="arrival-station-name-input" />
  </div>
  <form id="search-form">
    <div class="bottom-margin">
      <input type="radio" name="search-type" value="distance" id="distance" checked>
      <label for="distance">최단거리</label>
      <input type="radio" name="search-type" value="time" id="time">
      <label for="time">최소시간</label>
    </div>
    <button type="submit" id="search-button">길 찾기</button>
  </form>
  <div id="result-container"></div>
`;

export const RESULT = `
  <h2>📝 결과</h2>
  <h3 id="type-title"></h3>
  <table>
    <tbody id="result-table-body"></tbody>
  </table>
`;

export const RESULT_TABLE_HEADER = `
  <tr>
    <th>총 거리</th>
    <th>총 소요 시간</th>
  </tr>
`;
