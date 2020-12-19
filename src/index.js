import Subway from './model/subway.js';
import {onFindRoute} from './controller/event.js';

export const subway = new Subway();

document.body
  .querySelector('#search-button')
  .addEventListener('click', onFindRoute);

subway.findShortDistance();
