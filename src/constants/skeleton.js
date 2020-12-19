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
  <div class="bottom-margin">
    <input type="radio" name="search-type" value="distance" id="distance" checked>
    <label for="distance">최단거리</label>
    <input type="radio" name="search-type" value="time" id="time">
    <label for="time">최소시간</label>
  </div>
  <button id="search-button">길 찾기</button>
`;

export const RESULT = `
  <h2>📝 결과</h2>
  <h3>최단거리</h3>
  <table>
    <tbody>
      <tr>
        <th>총 거리</th>
        <th>총 소요 시간</th>
      </tr>
    </tbody>
  </table>
`;
