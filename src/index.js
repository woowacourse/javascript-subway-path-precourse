import { Header, PathInput, PathResult } from './components/index.js';
import { Dijkstra, isConnectedStation } from './utils/index.js';
import { stations, lines } from './data.js';

export default function SubwayPath() {
  this.app = document.getElementById('app');
  this.pathInput = {};
  this.PathResult = {};

  this.findRoute = (departure, arrival, search_type) => {
    const dijkstra = new Dijkstra();
    this.addAllStationToVertex(stations, dijkstra);
    this.addEdge(search_type, dijkstra);
    const path = dijkstra.findShortestPath(departure, arrival);
    if (this.isValidRoute(path)) {
      const [totalTime, totalDistance] = this.getTotalDistanceAndTime(path);
      this.pathResult.render(search_type, totalTime, totalDistance, path);
    }
  };

  this.addAllStationToVertex = (stations, dijkstra) => {
    stations.forEach(({ name }) => dijkstra.addVertex(name));
  };

  this.addEdge = (search_type, dijkstra) => {
    if (search_type === '최단거리') {
      this.addAllDistanceToEdge(dijkstra);
    } else if (search_type === '최소시간') {
      this.addAllTimeToEdge(dijkstra);
    }
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

  this.isValidRoute = path => {
    if (!isConnectedStation(path)) {
      alert('출발역과 도착역이 연결되지 않아 경로를 조회할 수 없습니다.');
      return false;
    }

    return true;
  };

  this.getTotalDistanceAndTime = path => {
    let [totalDistance, totalTime, start] = [0, 0, 0];
    while (start < path.length - 1) {
      lines.forEach(({ stations, sections }) => {
        sections.forEach(({ distance, time }, index) => {
          if (this.isSameSection(stations, index, path, start)) {
            totalDistance += Number(distance);
            totalTime += Number(time);
            start += 1;
          }
        });
      });
    }
    return [totalDistance, totalTime];
  };

  this.isSameSection = (stations, index, path, start) => {
    return (
      stations[index].name === path[start] &&
      stations[index + 1].name === path[start + 1]
    );
  };

  this.delegateEvent = ({ target }) => {
    this.pathInput.searchEvent({ target });
  };

  this.handleClickApp = ({ target }) => {
    this.delegateEvent({ target });
  };

  new Header();
  this.pathInput = new PathInput({ findRoute: this.findRoute });
  this.pathResult = new PathResult();
  this.app.addEventListener('click', this.handleClickApp);
}

new SubwayPath();
