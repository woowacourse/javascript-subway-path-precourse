import Dijkstra from './utils/Dijkstra.js';
import { loadStations, loadLines } from './utils/helpers.js';

export default function SubwayPath() {
  // const app = document.getElementById('app');
  const dijkstra = new Dijkstra();
  const stations = loadStations();
  const lines = loadLines(stations);

  const departStation = document.getElementById('departure-station-name-input');
  const arriveStation = document.getElementById('arrival-station-name-input');
  const submitBtn = document.getElementById('search-button');

  submitBtn.addEventListener('click', () => {
    console.log(departStation.value);
    console.log(arriveStation.value);
    const searchType = document.querySelector('input[name="search-type"]:checked').value;
    console.log(searchType);
    console.log(stations);
    console.log(lines);
  });
}

new SubwayPath();
