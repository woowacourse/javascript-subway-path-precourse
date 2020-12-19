export class FindPathInputs {
  constructor() {
    this.initializeDOM();
    this.initializeEvent();
  }

  initializeDOM = () => {
    this.departureStationInput = document.getElementById('departure-station-name-input');
    this.arrivalStationInput = document.getElementById('arrival-station-name-input');
    this.radioButtonInput = document.getElementById('radio_container');
    this.searchButton = document.getElementById('search-button');
  };

  initializeEvent = () => {
    this.searchButton.addEventListener('click', this.handleInputValues);
  };

  render = () => {};

  handleInputValues = () => {
    const departure = this.departureStationInput.value;
    const arrival = this.arrivalStationInput.value;
    console.log(departure, arrival);
  };

  checkStationNameisValid = () => {};
}
