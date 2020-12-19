import SubwayPath from './controllers/subwayPath.js';
import SubwayPathController from './controllers/subwayPathController.js';
import { subwayPathTemplate } from './views/template.js';

export default class App {
  constructor($target) {
    this.$target = $target;
    this.renderSubwayPathTemplate();

    new SubwayPathController();
  }

  renderSubwayPathTemplate() {
    this.$target.innerHTML = subwayPathTemplate();
  }
}
