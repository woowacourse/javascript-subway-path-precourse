import { default as controller } from '../controller/controller.js';
import { timeDijkstra, distanceDijkstra } from '../index.js';

export default {
  show() {
    const section = document.querySelector('#result-section');
    const start = document.querySelector('#departure-station-name-input').value;
    const end = document.querySelector('#arrival-station-name-input').value;
    section.style.display = 'block';
    const flag = document.querySelector('input[name="search-type"]:checked')
      .value;
    const tree = this.defineTree(flag);
    this.clear();
    controller.init(tree, start, end);
  },

  defineTree(flag) {
    if (flag === 'distance') {
      return distanceDijkstra;
    } else if (flag === 'time') {
      return timeDijkstra;
    }
  },

  drawTable(distance, time, route, flag) {
    const tableBody = document.querySelector('#tbody');
    let label = document.querySelector('#label');
    if (flag === 'distance') {
      label.innerHTML = `<h2>최단거리</h2>`;
    } else {
      label.innerHTML = `<h2>최소시간</h2>`;
    }
    route = this.makeArrowText(route);
    let tableRows = `<tr><td>${distance}km</td><td>${time}분</td></tr><tr><td colspan="2">${route}</td></tr>`;
    tableBody.innerHTML = tableRows;
  },

  makeArrowText(routes) {
    let way = ``;
    routes.forEach(route => {
      if (routes.indexOf(route) !== routes.length - 1) {
        way += `${route}->`;
      } else {
        way += `${route}`;
      }
    });
    return way;
  },

  clear() {
    document.querySelector('#departure-station-name-input').value = '';
    document.querySelector('#arrival-station-name-input').value = '';
  },
};
