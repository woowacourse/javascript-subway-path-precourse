class ValidateSubwayManager {
  constructor(getState, getStations) {
    this.getState = getState;
    this.getStations = getStations;

    this.render();
  }

  setDOMElements = () => {
    this.$departureStationInput = document.querySelector(
      "#departure-station-name-input"
    );
    this.$arrivalStationInput = document.querySelector(
      "#arrival-station-name-input"
    );
  };

  render = () => {
    this.setDOMElements();
  };
}

export default ValidateSubwayManager;
