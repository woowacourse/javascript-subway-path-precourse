import { lines, stations } from './subwayMapData.js';
import { appendNew, appendNewRadioButton } from './utils/util-ui.js';
import Dijkstra from './utils/Dijkstra.js';

export default function SubwayPathFinder() {
  loadSubwayMapDataToLocalStorage();
  makeSubwayMapGraphAll();
  appendUI();
}

const appendUI = () => {
  const appDiv = document.getElementById('app');
  let container;

  appendNew('h2', appDiv, '🚇지하철 길찾기');
  container = appendNew('div', appDiv, '', 'container');
  appendStationNameInputs(container);
  appendRadioButtons(container);
  setDefaultOption('shortest-distance');
  appendNew('button', container, '길 찾기', 'search-button');
  //appendTable();
};

const appendStationNameInputs = (container) => {
  appendNew('label', container, '출발역');
  appendNew('input', container, '', 'departure-station-name-input');
  appendNew('br', container);
  appendNew('label', container, '도착역');
  appendNew('input', container, '', 'arrival-station-name-input');
  appendNew('br', container);
};

const appendRadioButtons = (container) => {
  const form = appendNew('form', container);

  appendNewRadioButton(form, '최단거리', 'shortest-distance', 'search-type');
  appendNewRadioButton(form, '최소시간', 'shortest-time', 'search-type');
};

const setDefaultOption = (option) => {
  document.getElementById(option).checked = true;
};

const loadSubwayMapDataToLocalStorage = () => {
  localStorage.setItem('lines', JSON.stringify(lines));
  localStorage.setItem('stations', JSON.stringify(stations));
};

const makeSubwayMapGraphAll = () => {
  makeSubwayMapGraph(lines, stations, 'distanceInterval');
  makeSubwayMapGraph(lines, stations, 'timeInterval');
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

new SubwayPathFinder();
