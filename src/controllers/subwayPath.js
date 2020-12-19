import { ID, NAME, ALERT } from '../constants/index.js';
import { isValidNameLength, isNameInStations } from '../utils/userException.js';
import { addDijkstraEdgeDistance } from '../utils/addDijkstra.js';
import { stationsDistance, stationsTime } from '../models/stationsInitialData.js';
import Dijkstra from '../utils/Dijkstra.js';
import Stations from '../models/stations.js';

export const getStation = (stationName) => {
  const stationNameInput = document.querySelector(`#${stationName}`);
  const stations = new Stations();

  const stationNameInputValue = hasValidName(stationNameInput.value, stations.stations);
  return stationNameInputValue;
};

export const getShortestSelect = () => {
  const selectors = document.getElementsByName(`${NAME.SEARCH_TYPE}`);
  let selected = '';

  selectors.forEach((selector) => {
    if (selector.checked) {
      selected = selector.defaultValue;
    }
  });
  return selected;
};

export const hasValidName = (name, stations) => {
  if (!isValidNameLength(name)) {
    return null;
  } else if (!isNameInStations(stations, name)) {
    return null;
  } else {
    return name;
  }
};

export const hasValidInput = (departureStation, arrivalStation) => {
  if (departureStation === null || arrivalStation === null) {
    alert(ALERT.VALIDNAME);
  } else if (departureStation === arrivalStation) {
    alert(ALERT.DUPLICATEDNAME);
  }
};

export const getResultPath = (departureStation, arrivalStation) => {
  const dijkstra = new Dijkstra();
  let result = '';

  addDijkstraEdgeDistance(dijkstra);
  result = dijkstra.findShortestPath(departureStation, arrivalStation);
  return result;
};

export const getResultDistance = (resultPath) => {
  let totalDistance = 0;
  stationsDistance.forEach((station) => {
    for (let i = 0; i < resultPath.length - 1; i++) {
      if (station.start === resultPath[i] && station.end === resultPath[i + 1]) {
        totalDistance += station.distance;
      }
    }
  });

  return totalDistance;
};

export const getResultTime = (resultPath) => {
  let totalTime = 0;
  stationsTime.forEach((station) => {
    for (let i = 0; i < resultPath.length - 1; i++) {
      if (station.start === resultPath[i] && station.end === resultPath[i + 1]) {
        totalTime += station.distance;
      }
    }
  });

  return totalTime;
};
