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
  };
}
