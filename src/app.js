import SubwayPath from './controllers/subwayPath.js';
import SubwayPathController from './controllers/subwayPathController.js';
import { subwayPathTemplate } from './views/template.js';
import { ID } from './constants/index.js';

export default class App {
  constructor($target) {
    this.$target = $target;
    this.renderSubwayPathTemplate();
    this.createTable();

    new SubwayPathController();
  }

  renderSubwayPathTemplate() {
    this.$target.innerHTML = subwayPathTemplate();
  }

  createTable() {
    const resultTable = document.createElement('div');

    resultTable.id = ID.RESULT_TABLE;
    this.$target.appendChild(resultTable);
  }
}
