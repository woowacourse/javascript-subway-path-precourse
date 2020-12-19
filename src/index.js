import { PathInput } from './components/index.js';
import { Dijkstra } from './utils/index.js';
import { stations, lines } from './data.js';

export default function SubwayPath() {
  this.app = document.getElementById('app');
  this.pathInput = {};

  this.render = () => {
    this.app.innerHTML = this.pathInput.template();
  };

  this.findRoute = () => {
    const dijkstra = new Dijkstra();
    this.addAllVertex(stations, dijkstra);
  };

  this.addAllVertex = (stations, dijkstra) => {
    stations.forEach(({ name }) => dijkstra.addVertex(name));
  };

  this.delegateEvent = ({ target }) => {
    this.pathInput.searchEvent({ target });
  };

  this.handleClickApp = ({ target }) => {
    this.delegateEvent({ target });
  };

  this.pathInput = new PathInput({ findRoute: this.findRoute });
  this.render();
  this.app.addEventListener('click', this.handleClickApp);
}

new SubwayPath();
