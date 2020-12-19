import { stations } from './data.js';
import { makeDijkstra, printResult, validateInput, alertNoRoute } from './utils/helpers.js';

export default function SubwayPath() {
  const dijkstraDist = makeDijkstra('dist', stations);
  const dijkstraTime = makeDijkstra('time', stations);
  const departStation = document.getElementById('departure-station-name-input');
  const arriveStation = document.getElementById('arrival-station-name-input');
  const submitBtn = document.getElementById('search-button');

  submitBtn.addEventListener('click', () => showResult());

  const showResult = () => {
    if (validateInput(departStation.value, arriveStation.value, stations)) {
      const searchType = document.querySelector('input[name="search-type"]:checked').value;
      let result;
      if (searchType === 'dist') {
        result = dijkstraDist.findShortestPath(departStation.value, arriveStation.value);
      } else if (searchType === 'time') {
        result = dijkstraTime.findShortestPath(departStation.value, arriveStation.value);
      }
      if (!result) return alertNoRoute();
      printResult(result, stations);
    }
  };
}

new SubwayPath();
