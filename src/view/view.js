import { default as controller } from '../controller/controller.js';
import { timeDijkstra, distanceDijkstra } from '../index.js';

export default {
  show() {
    const section = document.querySelector('#result-section');
    section.style.display = 'block';
    const start = document.querySelector('#departure-station-name-input').value;
    const end = document.querySelector('#arrival-station-name-input').value;
    const flag = document.querySelector('input[name="search-type"]:checked')
      .value;
    const tree = this.defineTree(flag);
    controller.init(tree, start, end);
  },

  defineTree(flag) {
    if (flag === 'distance') {
      return distanceDijkstra;
    } else if (flag === 'time') {
      return timeDijkstra;
    }
  },
};
