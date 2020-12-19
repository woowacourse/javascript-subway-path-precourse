import {BUTTON} from './constants.js';
import {handleSearchButton} from './subway.handler.js';

export default class SubwayListener {
  constructor(subway, subwayView) {
    this.subway = subway;
    this.subwayView = subwayView;

    this.addFindButtonListener();
  }

  addFindButtonListener() {
    const $findButton = document.getElementById(BUTTON.ID);

    $findButton.addEventListener('click', () => {
      handleSearchButton(this.subway, this.subwayView);
    });
  }
}
