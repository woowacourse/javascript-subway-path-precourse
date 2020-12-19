import { loadStations, loadLines, makeDijkstra } from './utils/helpers.js';

export default function SubwayPath() {
  // const app = document.getElementById('app');
  const stations = loadStations();
  const lines = loadLines(stations);
  const dijkstraDist = makeDijkstra('dist', stations);
  const dijkstraTime = makeDijkstra('time', stations);

  const departStation = document.getElementById('departure-station-name-input');
  const arriveStation = document.getElementById('arrival-station-name-input');
  const submitBtn = document.getElementById('search-button');

  submitBtn.addEventListener('click', () => {
    const searchType = document.querySelector('input[name="search-type"]:checked').value;
  });
}

new SubwayPath();
