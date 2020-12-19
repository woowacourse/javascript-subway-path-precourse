export default class ResultView {
  constructor() {
    this.elements = {
      resultContainer: document.querySelector('.result-container'),
    };
  }

  render(path, distance, time, searchType) {
    this.elements.resultContainer.innerHTML = `
      <h2>📝결과</h2>
      <h3>
        ${searchType === 'shortest-distance' ? '최단거리' : ''}
        ${searchType === 'minimum-time' ? '최소시간' : ''}
      </h3>
      <table id="result-table">
        <thead>
          <tr>
            <th>총 거리</th>
            <th>총 소요 시간</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${distance}km</td>
            <td>${time}분</td>
          </tr>
          <tr>
            <td colspan="2">${path.join('➜')}</td>
          </tr>
        </tbody>
      </table>
    `;
  }
}
