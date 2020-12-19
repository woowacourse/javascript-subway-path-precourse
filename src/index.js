import { stations } from './data.js';
import { makeDijkstra, validateInput, alertNoRoute } from './utils/helpers.js';
import { printResult } from './utils/print.js';
import { SEARCH_TYPE } from './constants.js';

export default function SubwayPath() {
  this.stations = stations;

  const dijkstraDist = makeDijkstra(SEARCH_TYPE.DIST, stations);
  const dijkstraTime = makeDijkstra(SEARCH_TYPE.TIME, stations);
  const departStation = document.getElementById('departure-station-name-input');
  const arriveStation = document.getElementById('arrival-station-name-input');
  const submitBtn = document.getElementById('search-button');
  submitBtn.addEventListener('click', () => showResult());

  const showResult = () => {
    if (validateInput(departStation.value, arriveStation.value, stations)) {
      const searchType = document.querySelector('input[name="search-type"]:checked').value;
      let result;
      if (searchType === SEARCH_TYPE.DIST) {
        result = dijkstraDist.findShortestPath(departStation.value, arriveStation.value);
      } else if (searchType === SEARCH_TYPE.TIME) {
        result = dijkstraTime.findShortestPath(departStation.value, arriveStation.value);
      }
      if (!result) return alertNoRoute();
      printResult(result, stations);
    }
  };
}

new SubwayPath();
