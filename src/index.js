import { PathInput } from './components/index.js';
import { Dijkstra } from './utils/index.js';
import { stations, lines } from './data.js';

export default function SubwayPath() {
  this.app = document.getElementById('app');
  this.pathInput = {};

  this.render = () => {
    this.app.innerHTML = this.pathInput.template();
  };

  this.findRoute = (departure, arrival, search_type) => {
    const dijkstra = new Dijkstra();
    this.addAllStationToVertex(stations, dijkstra);
    if (search_type === '최단거리') {
      this.addAllDistanceToEdge(dijkstra);
    } else if (search_type === '최소시간') {
      this.addAllTimeToEdge(dijkstra);
    }
    const path = dijkstra.findShortestPath(departure, arrival);
    console.log(path);
  };

  this.addAllStationToVertex = (stations, dijkstra) => {
    stations.forEach(({ name }) => dijkstra.addVertex(name));
  };

  this.addAllDistanceToEdge = dijkstra => {
    lines.forEach(({ stations, sections }) => {
      sections.forEach(({ distance }, index) => {
        dijkstra.addEdge(
          stations[index].name,
          stations[index + 1].name,
          distance
        );
      });
    });
  };

  this.addAllTimeToEdge = dijkstra => {
    lines.forEach(({ stations, sections }) => {
      sections.forEach(({ time }, index) => {
        dijkstra.addEdge(stations[index].name, stations[index + 1].name, time);
      });
    });
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
