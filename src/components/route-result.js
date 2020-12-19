import Component from '../core/component.js';

class RouteResult extends Component {
  constructor($target, props) {
    super($target, props);
    props.searchResult.subscribe(this.render);
    this.render();
  }

  mountTemplate() {
    console.log(this._props.searchResult.value);
    this._$target.innerHTML = `
			<h1>결과</h1>
			${this.createSearchTypeH3Template()}
			<table border="1">
					<tr>
						<th>총 거리</th>
						<th>총 소요 시간</th>
					</tr>
				${this.createTableBodyTemplate()}
			</table>
    `;
  }

  createSearchTypeH3Template() {
    const { searchType } = this._props.searchResult.value;
    return `
			<h3>
				${searchType === 'distance-first' ? '최단거리' : '최소시간'}
			</h3>
		`;
  }

  createTableBodyTemplate() {
    const { searchResult } = this._props;
    const { totalTime, totalDistance, resultPath } = searchResult.value;
    return `
			<tr>
				<td>${totalDistance}km</td>
				<td>${totalTime}분</td>
			</tr>
			<tr>
				<td colspan="2">${resultPath.join('->')}</td>
			</tr>
		`;
  }
}

export default RouteResult;
