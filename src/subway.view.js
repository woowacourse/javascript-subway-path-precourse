import {APP} from './constants.js';
import {initTemplate, resultTemplate} from './components/subway.component.js';
import {INPUT, RADIO, RESULT} from './constants.js';

export default class SubwayView {
  constructor() {
    this.$app = document.getElementById(APP.ID);
    this.renderInit(this.$app);
    this.setElements();
  }

  renderInit($app) {
    $app.innerHTML += initTemplate();
  }

  renderResult(searchType, searchResult, total) {
    this.$result.innerHTML =
      resultTemplate(searchType, searchResult.join(' ➡'), total);
  }

  setElements() {
    this.$startInput = document.getElementById(INPUT.START.ID);
    this.$endInput = document.getElementById(INPUT.END.ID);
    this.$radio = document.getElementsByName(RADIO.NAME);
    this.$result = document.getElementById(RESULT.ID);
  }
}
