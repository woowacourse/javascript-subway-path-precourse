const KILOMETER = 'km';
const MINUTE = '분';
const ARROW = '→';
const SHORTEST_PATH_KOR = '최단거리';
const SHORTEST_TIME_KOR = '최소시간';

export default class SubwayPathOutput {
	constructor() {
		this.subwayPathAppContainer = document.getElementById('app')

		this.renderInputFieldContainer();
	}

	renderInputFieldContainer = () => {
		const subwayPathInputContainer = document.createElement('div');

		subwayPathInputContainer.setAttribute('id', 'subway-path-input-container');
		this.subwayPathAppContainer.appendChild(subwayPathInputContainer);

		this.createInputField(subwayPathInputContainer);
	}

	createInputField = subwayPathInputContainer => {
		subwayPathInputContainer.innerHTML = 
		`
		<h1>🚇 지하철 길찾기</h1>
		출발역 <input id="departure-station-name-input" /><br />
		도착역 <input id="arrival-station-name-input" /><br />
		<input type="radio" name="search-type" value="shortest-path" checked="checked" />
		<lable for="shortest-path">최단거리</label>
		<input type="radio" name="search-type" value="shortest-time" />
		<lable for="shortest-time">최소시간</label><br />
		<button id="search-button">길 찾기</button>
		`;
	}

	renderResult = resultTableData => {
		const resultTableContainer = document.createElement('div');
		resultTableContainer.setAttribute('id', 'result-table-container');
		this.subwayPathAppContainer.appendChild(resultTableContainer);

		this.renderResultTable(resultTableContainer, resultTableData);
	}

	renderResultTable = (resultTableContainer, resultTableData) => {
		let radioSelect;
		let totalDistance;
		let totalTime;
		let totalPath;

		[radioSelect, totalDistance, totalTime, totalPath] = [...resultTableData];

		resultTableContainer.innerHTML = this.createResultType(radioSelect) + this.createResultTable(totalDistance, totalTime, totalPath);
	}

	createResultType = radioSelect => {
		const resultType =
		`
		<h2>📝 결과</h2>
		<h4>${radioSelect}</h4>
		`;

		return resultType;
	}

	createResultTable = (totalDistance, totalTime, totalPath) => {
		const resultTable = 
		`
		<table>
			<tr>
				<th>총 거리</th>
				<th>총 소요 시간</th>
			</tr>
			<tr>
				<td>${totalDistance + KILOMETER}</td>
				<td>${totalTime + MINUTE}</td>
			</tr>
			<tr>
				<td colspan="2">${totalPath.join(ARROW)}</td>
			</tr>
		</table>
		`;

		return resultTable;
	}
}