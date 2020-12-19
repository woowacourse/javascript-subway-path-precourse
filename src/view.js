const resultDiv = document.getElementById('result');

export default class ViewController {
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
