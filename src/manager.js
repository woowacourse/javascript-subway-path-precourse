export class subwayPathManager {
  static getStations = () => {
    const departureStation = document.getElementById(
      'departure-station-name-input'
    ).value;
    const arrivalStation = document.getElementById('arrival-station-name-input')
      .value;

    console.log(departureStation, arrivalStation);
  };
}
