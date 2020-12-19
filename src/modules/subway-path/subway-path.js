import InputValidator from './input-validator.js';
// import Dijkstra from '../../utils/Dijkstra.js';
// import { SECTIONS } from '../../data/subway.js';

export default class SubwayPath {
  constructor() {
    // this._shortestPathFinder = new Dijkstra();
    this.initializeEventListener();
  }

  initializeEventListener() {
    const targetNode = document.querySelector('#submit-container');
    targetNode.addEventListener('click', this.onClickSearchButton.bind(this));
  }

  onClickSearchButton(event) {
    const target = event.target;
    const validator = new InputValidator();
    const departure = document.querySelector('#departure-station-name-input');
    const arrival = document.querySelector('#arrival-station-name-input');
    if (
      target.id !== 'search-button' ||
      !validator.checkValidInputs(departure, arrival)
    ) {
      return;
    }
  }
}
