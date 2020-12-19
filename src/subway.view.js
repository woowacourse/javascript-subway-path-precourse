import {APP} from './constants.js';

import {inputTemplate} from './components/subway.component.js';
import {INPUT, RADIO} from './constants.js';

export default class SubwayView {
  constructor() {
    this.$app = document.getElementById(APP.ID);
    this.renderInit(this.$app);
    this.setElements();
  }

  renderInit($app) {
    $app.innerHTML += inputTemplate();
  }

  setElements() {
    this.$startInput = document.getElementById(INPUT.START.ID);
    this.$endInput = document.getElementById(INPUT.END.ID);
    this.$radio = document.getElementsByName(RADIO.NAME);
  }
}
