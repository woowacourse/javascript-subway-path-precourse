export default {
	init(selector) {
		this.element = document.querySelector(selector);
		this.bindEvents();
	},

	query(selector) {
		return this.element.querySelector(selector);
	},

	bindEvents() {
		this.query('#search-button').addEventListener('click', this.onClickSearch.bind(this));
	},

	onClickSearch() {
		const departure = this.query('#departure-station-name-input').value;
		const arrival = this.query("#arrival-station-name-input").value;

		if(!departure || !arrival) {
			return alert('출발역 또는 도착역을 입력해주세요.');
		}
		if(departure.length < 2 || arrival.length < 2) {
			return alert('출발역 또는 도착역은 2글자 이상 입력해야 합니다.');
		}
		if(departure === arrival) {
			return alert('출발역과 도착역이 같습니다.');
		}
	},
}
