import { processException } from './validation-manager.js';

export const requestToFindShortestPath = (e) => {
  const departure = document.getElementById('departure-station-name-input');
  const departureName = departure.value;
  const arrival = document.getElementById('arrival-station-name-input');
  const arrivalName = arrival.value;
  const exception = validateStationNames(departureName, arrivalName);

  if (exception) {
    processException(exception);
  }
  searchShortestPath(departureName, arrivalName);
};

const searchShortestPath = (departureName, arrivalName) => {};
