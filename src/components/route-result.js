import Component from '../core/component.js';

class RouteResult extends Component {
  constructor($target) {
    super($target);
    this.render();
  }

  mountTemplate() {
    this._$target.innerHTML = `
		route result
    `;
  }
}

export default RouteResult;
