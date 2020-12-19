import Path from "./models/path.js";

export default {
	init(selector) {
		this.element = document.querySelector(selector);
		this.bindEvents();
	},

	query(selector) {
		return this.element.querySelector(selector);
	},

	bindEvents() {
		this.query("#search-button").addEventListener(
			"click",
			this.onClickSearch.bind(this)
		);
	},

	onClickSearch() {
		const departure = this.query("#departure-station-name-input").value;
		const arrival = this.query("#arrival-station-name-input").value;
		const type = this.query("input[name='search-type']:checked").value;

		if (!this.isValidInput(departure, arrival)) {
			return false;
		}

		try {
			const result =
				type === "distance"
					? Path.getShortestDistancePath(departure, arrival)
					: Path.getShortestTimePath(departure, arrival);

			this.showResult(result, type);
		} catch (error) {
			alert(error.message);
		}
	},

	isValidInput(departure, arrival) {
		if (!departure || !arrival) {
			return alert("출발역 또는 도착역을 입력해주세요.");
		}
		if (departure.length < 2 || arrival.length < 2) {
			return alert("출발역 또는 도착역은 2글자 이상 입력해야 합니다.");
		}
		if (departure === arrival) {
			return alert("출발역과 도착역이 같습니다.");
		}
		if (!Path.isExistStation(departure)) {
			return alert(`${departure}역을 찾을 수 없습니다.`);
		}
		if (!Path.isExistStation(arrival)) {
			return alert(`${arrival}역을 찾을 수 없습니다.`);
		}

		return true;
	},

	showResult({ paths, distance, time }, type) {
		const html = `
			<h3>결과</h3>
			<h5>${type === "distance" ? "최단거리" : "최소시간"}</h5>
			<table>
				<thead>
					<tr>
						<th>총 거리</th>
						<th>총 소요시간</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>${distance}km</td>
						<td>${time}분</td>
					</tr>
					<tr>
						<td colspan="2">${paths.join("➞")}</td>
					</tr>
				</tbody>
			</table>
		`;

		this.query("#result").innerHTML = html;
	},
};
