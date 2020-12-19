import Stations from './models/stations.js';
import { subwayPathTemplate } from './views/template.js';

export default class App {
  constructor($target) {
    this.$target = $target;
    this.renderSubwayPathTemplate();
  }

  renderSubwayPathTemplate() {
    this.$target.innerHTML = subwayPathTemplate();
  }
}
