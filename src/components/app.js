import Component from '../core/component.js';
import State from '../core/state.js';
import RouteInput from './route-input.js';
import RouteResult from './route-result.js';

class App extends Component {
  #searchRequest;

  constructor($target) {
    super($target);
    this.initializeStates();
    this.render();
  }

  initializeStates() {
    this.#searchRequest = new State({});
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
    const searchRequest = this.#searchRequest;
    new RouteInput($RouteInputContainer, { searchRequest });
    new RouteResult($routeResultContainer, { searchRequest });
  }
}

export default App;
