const TIME_UNIT = '분';
const DISTANCE_UNIT = 'km';
const RESULT_HEADER = '📝 결과';
const TABLE_HEADER_DISTANCE = '총 거리';
const TABLE_HEADER_TIME = '총 소요 시간';
const RESULT_TABLE = 'result-table';

const resultDiv = document.getElementById('result');
const departureInput = document.getElementById('departure-station-name-input');
const arrivalInput = document.getElementById('arrival-station-name-input');

export default class ViewController {
  printSearchResult(result, searchType) {
    resultDiv.innerHTML += `
            ${this.getHeaders(searchType)}
            <table id="${RESULT_TABLE}">
                ${this.getTableHeaders()}
                <tr>
                    <td>${result.totalDistance}${DISTANCE_UNIT}</td>
                    <td>${result.totalTime}${TIME_UNIT}</td>
                </tr>
                <tr>
                    <td colspan="2">${result.pathString}</td>
                </tr>
            </table>
        `;
  }

  getHeaders(searchType) {
    return `
            <h2>${RESULT_HEADER}</h2>
            <h3>${searchType}</h3>
        `;
  }

  getTableHeaders() {
    return `
            <th><b>${TABLE_HEADER_DISTANCE}</b></th>
            <th><b>${TABLE_HEADER_TIME}</b></th>
        `;
  }

  clearResultDiv() {
    resultDiv.innerHTML = '';
    resultDiv.style.visibility = 'visible';
  }

  clearStationInputs() {
    departureInput.value = '';
    arrivalInput.value = '';
    departureInput.focus();
  }

  // 결과창을 비우고 결과를 출력함
  showResults(result, searchType) {
    this.clearResultDiv();
    this.printSearchResult(result, searchType);
  }
}
