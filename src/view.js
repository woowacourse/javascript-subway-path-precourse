export const DOMStrings = {
  DEPARTURE_STATION_NAME_INPUT: 'departure-station-name-input',
  ARRIVAL_STATION_NAME_INPUT: 'arrival-station-name-input',
  SEARCH_BUTTON: 'search-button',
  RESULT_DIV: 'result',
  CHECKED_RADIO_BUTTON: 'input[name="search-type"]:checked',
};

export const constants = {
  SHORTEST_DISTANCE: '최단거리',
  SHORTEST_TIME: '최소시간',
  RESULT_ARROW: '→',
};

const resultDiv = document.getElementById(DOMStrings.RESULT_DIV);

export class ViewController {
  printSearchResult(result, searchType) {
    resultDiv.innerHTML += `
            ${this.getHeaders(searchType)}
            <table id="result-table">
                ${this.getTableHeaders()}
                <tr>
                    <td>${result.totalDistance}km</td>
                    <td>${result.totalTime}분</td>
                </tr>
                <tr>
                    <td colspan="2">${result.pathString}</td>
                </tr>
            </table>
        `;
  }

  getHeaders(searchType) {
    return `
            <h2>📝 결과</h2>
            <h3>${searchType}</h3>
        `;
  }

  getTableHeaders() {
    return `
            <th><b>총 거리</b></th>
            <th><b>총 소요 시간</b></th>
        `;
  }

  clearResultDiv() {
    resultDiv.innerHTML = '';
    resultDiv.style.visibility = 'visible';
  }
}
