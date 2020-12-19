export default class SubwayPathOutput {
	constructor() {
		this.renderInputFieldContainer();
	}

	renderInputFieldContainer = () => {
		const subwayPathAppContainer = document.getElementById('app')
		const subwayPathInputContainer = document.createElement('div');

		subwayPathInputContainer.setAttribute('id', 'subway-path-input-container');
		subwayPathAppContainer.appendChild(subwayPathInputContainer);

		this.createInputField(subwayPathInputContainer);
	}

	createInputField = subwayPathInputContainer => {
		subwayPathInputContainer.innerHTML = 
		`
		<h1>🚇 지하철 길찾기</h1>
		출발역 <input id="departure-station-name-input" /><br />
		도착역 <input id="arrival-station-name-input" /><br />
		<input type="radio" id="shortest-path-radio-input" name="search-type" value="shortest-path" checked="checked"/>
		<lable for="shortest-path">최단거리</label>
		<input type="radio" id="shortest-time-radio-input" name="search-type" value="shortest-time" />
		<lable for="shortest-time">최소시간</label><br />
		<button id="search-button">길 찾기</button>
		`;
	}
}