import { validateStationName } from './controller.js';

export class subwayPathManager {
  static getStations = () => {
    const departureStation = document.getElementById(
      'departure-station-name-input'
    ).value;
    const arrivalStation = document.getElementById('arrival-station-name-input')
      .value;

    if (
      validateStationName(departureStation) &&
      validateStationName(arrivalStation)
    ) {
      alert('true');
    }

    getSearchType();
  };
}

const getSearchType = () => {
  const searchType = document.getElementsByName('search-type');
  let selectedSearchType = '';

  searchType.forEach((type) => {
    if (type.checked) {
      selectedSearchType = type.value;
    }
  });
  alert(selectedSearchType);
};
