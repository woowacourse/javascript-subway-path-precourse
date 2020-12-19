import SubwayPath from './controllers/subwayPath.js';
import { subwayPathTemplate } from './views/template.js';

export default class App {
  constructor($target) {
    this.$target = $target;
    this.renderSubwayPathTemplate();

    new SubwayPath();
  }

  renderSubwayPathTemplate() {
    this.$target.innerHTML = subwayPathTemplate();
  }
}
