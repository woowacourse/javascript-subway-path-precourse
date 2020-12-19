import {INPUT, RADIO, BUTTON, SEARCH_TYPE, RESULT} from '../constants.js';

class SubwayComponent {
  initTemplate() {
    return `
      <h1>🚇 지하철 길찾기 </h1>
      출발역 <input id=${INPUT.START.ID}></input><br><br>
      도착역 <input id=${INPUT.END.ID}></input><br><br>
      <input 
        type="radio" name=${RADIO.NAME}
        value=${SEARCH_TYPE.MIN_DISTANCE} checked="true">
        ${SEARCH_TYPE.MIN_DISTANCE}
      <input 
        type="radio" name=${RADIO.NAME} 
        value=${SEARCH_TYPE.MIN_TIME}>
        ${SEARCH_TYPE.MIN_TIME}
      <br><br>
      <button id=${BUTTON.ID} value="길 찾기">길 찾기</button>
      <div id=${RESULT.ID}></div>
    `;
  }

  resultTemplate(searchType, searchResult, total) {
    return `
      <h2>📝 결과</h2>
      <h3>${searchType}</h3>
      <table>
        <thead>
          <tr>
            <th>총 거리</th>
            <th>총 소요 시간</th>
          </tr>
        <thead>
        <tbody>
          <tr>
            <td>${total.distance}km</td>
            <td>${total.time}분</td>
          </tr>
          <tr>
            <td colspan="2">${searchResult}</td>
          </tr>
        <tbody>
      </table>
    `;
  }
}

const subwayComponent = new SubwayComponent();

export const {initTemplate, resultTemplate} = subwayComponent;
