import {BUTTON} from './constants.js';
import {handleSearchButton} from './subway.handler.js';

export default class SubwayListener {
  constructor(subway, subwayView) {
    this.subway = subway;
    this.subwayView = subwayView;

    this.addSearchButtonListener();
  }

  addSearchButtonListener() {
    const $searchButton = document.getElementById(BUTTON.ID);

    $searchButton.addEventListener('click', () => {
      handleSearchButton(this.subway, this.subwayView);
    });
  }
}
