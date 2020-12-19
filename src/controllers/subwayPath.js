import { NAME, ALERT } from '../constants/index.js';
import { isValidNameLength, isNameInStations } from '../utils/userException.js';
import Dijkstra from '../utils/Dijkstra.js';
import Stations from '../models/stations.js';

export const getStation = (stationName) => {
  const stationNameInput = document.querySelector(`#${stationName}`);
  const stations = new Stations();
  const stationNameInputValue = hasValidName(stationNameInput.value, stations.stations);

  return stationNameInputValue;
};

const hasValidName = (name, stations) => {
  if (!isValidNameLength(name)) {
    return null;
  } else if (!isNameInStations(stations, name)) {
    return null;
  } else {
    return name;
  }
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

export const hasValidInput = (departureStation, arrivalStation) => {
  if (departureStation === null || arrivalStation === null) {
    alert(ALERT.VALIDNAME);
  } else if (departureStation === arrivalStation) {
    alert(ALERT.DUPLICATEDNAME);
  }
};

export const getResultPath = (shortestSelect, departureStation, arrivalStation) => {
  const dijkstra = new Dijkstra();
  const stations = new Stations();
  let result = '';

  if (shortestSelect === NAME.SHORTESTDISTANCE) {
    stations.addDijkstraEdgeDistance(dijkstra);
  } else if (shortestSelect === NAME.SHORTESTTIME) {
    stations.addDijkstraEdgeTime(dijkstra);
  }

  result = dijkstra.findShortestPath(departureStation, arrivalStation);
  return result;
};

export const getResultDistance = (resultPath) => {
  const stations = new Stations();
  let totalDistance = 0;

  stations.stationsDistance.forEach((station) => {
    if (resultPath.indexOf(station.start) > -1 && resultPath.indexOf(station.end) > -1) {
      totalDistance += station.distance;
    }
  });

  return totalDistance;
};

export const getResultTime = (resultPath) => {
  const stations = new Stations();
  let totalTime = 0;

  stations.stationsTime.forEach((station) => {
    if (resultPath.indexOf(station.start) > -1 && resultPath.indexOf(station.end) > -1) {
      totalTime += station.time;
    }
  });

  return totalTime;
};
