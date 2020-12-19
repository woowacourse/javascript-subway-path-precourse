import Table from './Table.js';

export default class Result {
  constructor(target, props) {
    this.target = target;
    this.props = props;
    this.createHeader(target);
    this.createSubTitle(target);
    this.createResultTable(target);
    this.render();
  }

  createHeader(target) {
    const h2 = document.createElement('h2');
    target.appendChild(h2);
    h2.innerHTML = `📝 결과`;
  }
  
  createSubTitle(target) {
    const { searchType } = this.props;
    const h3 = document.createElement('h3');
    h3.innerHTML = `${searchType}`
    target.appendChild(h3);
  }

  createResultTable(target) {
    const headers = ['총 거리', '총 소요시간'];
    this.resultTable = new Table({ target });
    this.resultTable.createTableHeader(headers);
  }

  render() {
    const { shortestPath, totalDistance, totalTime } = this.props;
    const path = shortestPath.join(' -> ')
    const renderer = `
      <tr>
        <td data-total-distance=${totalDistance}>${totalDistance}km</td>
        <td data-total-time=${totalTime}>${totalTime}분</td>
      </tr>
      <tr>
        <td colspan="2">${path}</td>
      </tr>
    `;

    this.resultTable.renderTable({
      data: shortestPath,
      renderer,
    })
  }
}