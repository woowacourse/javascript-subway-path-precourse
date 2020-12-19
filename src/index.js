import { lines, stations } from './subwayMapData.js';
import Dijkstra from './utils/Dijkstra.js';

export default function SubwayPathFinder() {
  loadSubwayMapDataToLocalStorage();
  makeSubwayMapGraphAll();
}

const loadSubwayMapDataToLocalStorage = () => {
  localStorage.setItem('lines', JSON.stringify(lines));
  localStorage.setItem('stations', JSON.stringify(stations));
};

const makeSubwayMapGraphAll = () => {
  makeSubwayMapGraph(lines, stations, 'distanceInterval');
  //makeSubwayMapGraph(lines, stations, 'timeInterval');
};

const makeSubwayMapGraph = (lines, stations, key) => {
  const dijkstra = new Dijkstra();
  console.log(dijkstra);

  stations.forEach((station) => dijkstra.addVertex(station));
  console.log(dijkstra);
  lines.forEach((line) => {
    const stations = line.stations;
    const intervals = line[key];

    for (let i = 0; i < stations.length - 1; i++) {
      dijkstra.addEdge(stations[i], stations[i + 1], intervals[i]);
    }
  });
};

new SubwayPathFinder();
