import Component from '../core/component.js';

class RouteInput extends Component {
  constructor($target) {
    super($target);
    this.render();
  }

  mountTemplate() {
    this._$target.innerHTML = `
			<div>
				<label for="departure-station"><strong>출발역</strong></label>
				<input name="departure-station" />
			</div>
			<div>
				<label for="departure-station"><strong>도착역</strong></label>
				<input name="departure-station" />
			</div>
			${this.createRadioButtonTemplate()}
			<button id="search-button">길 찾기</button>
    `;
  }

  createRadioButtonTemplate() {
    return `
			<form>
				<input type="radio" name="search-type" value="distance-first" checked> 최단거리
				<input type="radio" name="search-type" value="time-first"> 최소시간
			</form>
		`;
  }
}

export default RouteInput;
