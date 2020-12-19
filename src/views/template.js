import { ID, NAME } from '../constants/index.js';

export const subwayPathTemplate = () => {
  return `<h1>🚇 지하철 길찾기</h1>
    <label>출발역</label><input id='${ID.DEPARTURE_STATION_NAME_INPUT}' /><br>
    <label>도착역</label><input id='${ID.ARRIVAL_STATION_NAME_INPUT}' /><br><br>
    <input type="radio" name='${NAME.SEARCH_TYPE}' value='${NAME.SHORTESTDISTANCE}' checked>
    <label>${NAME.SHORTESTDISTANCE}</label>
    <input type="radio" name='${NAME.SEARCH_TYPE}' value='${NAME.SHORTESTTIME}'>
    <label>${NAME.SHORTESTTIME}</label><br><br>
    <button id='${ID.SEARCH_BUTTON}'>길 찾기</button>
    `;
};

export const resultTableTemplate = (selector, result) => {
  return `<h2>📝 결과</h2>
    <h3>${selector}</h3>
    <table border='1'>
    <th>총 거리</th>
    <th>총 소요시간</th>
    <tr><td>거리</td><td>시간</td></tr>
    <tr><td colspan="2">${showPath(result)}</td></tr>
    </table>`;
};

const showPath = (result) => {
  return result.map((path) => `${path}`).join('▶');
};
