import {
  validateStationNames,
  processException,
} from './validation-manager.js';
import Dijkstra from '../utils/Dijkstra.js';
import { LINES, STATIONS } from '../configuration.js';

export const requestToFindShortestPath = (e) => {
  const departure = document.getElementById('departure-station-name-input');
  const departureName = departure.value;
  const arrival = document.getElementById('arrival-station-name-input');
  const arrivalName = arrival.value;
  const option = document.querySelector('input[name="search-type"]:checked').id;
  const exception = validateStationNames(departureName, arrivalName);

  if (exception) {
    processException(exception);
  }
  searchShortestPath(departureName, arrivalName, option);
};

const searchShortestPath = (departureName, arrivalName, option) => {
  makeSubwayMapGraph(LINES, STATIONS, `${option}Interval`);
};

const makeSubwayMapGraph = (lines, stations, key) => {
  const dijkstra = new Dijkstra();

  stations.forEach((station) => dijkstra.addVertex(station));
  lines.forEach((line) => {
    const stations = line.stations;
    const intervals = line[key];

    for (let i = 0; i < stations.length - 1; i++) {
      dijkstra.addEdge(stations[i], stations[i + 1], intervals[i]);
    }
  });
};
