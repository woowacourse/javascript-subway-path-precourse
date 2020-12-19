import Component from '../core/component.js';

class RouteResult extends Component {
  constructor($target) {
    super($target);
    this.render();
  }

  mountTemplate() {
    this._$target.innerHTML = `
			<h1>결과</h1>
			<h3>최단거리<h3>
			<table border="1">
					<tr>
						<th>총 거리</th>
						<th>총 소요 시간</th>
					</tr>
				${this.createTableBodyTemplate()}
			</table>
    `;
  }

  createTableBodyTemplate() {
    return `
			<tr>
				<td>km</td>
				<td>분</td>
			</tr>
			<tr>
				<td colspan="2">경로</td>
			</tr>
		`;
  }
}

export default RouteResult;
