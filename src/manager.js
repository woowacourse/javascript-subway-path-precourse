import { validateStationName } from './controller.js';
import { Dijkstra } from './utils/Dijkstra.js';
import { showResult } from './print.js';

const dijkstra = new Dijkstra();

export class subwayPathManager {
  static getStations = () => {
    const departureStation = document.getElementById('departure-station-name-input').value;
    const arrivalStation = document.getElementById('arrival-station-name-input').value;

    showResult();
    if (validateStationName(departureStation) && validateStationName(arrivalStation)) {
      const departStation = departureStation;
      const arriveStation = arrivalStation;
    }

    const selectedSearchType = getSearchType();

    if (selectedSearchType === '최단거리') {
      getDistance();
    }
    if (selectedSearchType === '최소시간') {
      getTime();
    }
  };
}

const getSearchType = () => {
  let selectedSearchType = '';
  const searchType = document.getElementsByName('search-type');

  searchType.forEach((type) => {
    if (type.checked) {
      selectedSearchType = type.value;
    }
  });

  return selectedSearchType;
};

const getDistance = (departmentStation, arrivalStation) => {
  alert('거리');

  //Dijkstra.addEdge(departmentStation, arrivalStation, )
};

const getTime = (departmentStation, arrivalStation) => {
  alert('시간');
};
