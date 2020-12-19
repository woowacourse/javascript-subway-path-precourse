import Component from '../core/component.js';
import RouteInput from './route-input.js';
import RouteResult from './route-result.js';

class App extends Component {
  constructor($target) {
    super($target);
    this.render();
  }

  mountTemplate() {
    this._$target.innerHTML = `
      <h1>🚇 지하철 노선도 관리</h1>
      <section id="route-input-container"></section>
      <section id="route-result-container"></section>
    `;
  }

  mountComponents() {
    const $RouteInputContainer = document.querySelector(
      '#route-input-container'
    );
    const $routeResultContainer = document.querySelector(
      '#route-result-container'
    );
    new RouteInput($RouteInputContainer);
    new RouteResult($routeResultContainer);
  }
}

export default App;
