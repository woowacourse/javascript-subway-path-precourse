import { lines } from '../database/data.js';
import Distance from './distance.js';
import Time from './time.js';

export default class MakeTree {
  constructor() {
    this.init();
  }

  init() {
    lines.forEach(line => {
      new Distance(line);
    });

    lines.forEach(line => {
      new Time(line);
    });
  }
}
