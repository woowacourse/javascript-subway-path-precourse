class SubwayInput {
  constructor($target, props) {
    this.$target = $target;
    this.props = props;

    this.mountDOMs();
    this.bindEvents();
  }

  mountDOMs() {
    this.$departureInput = this.$target.querySelector(
      `#departure-station-name-input`,
    );
    this.$arrivalInput = this.$target.querySelector(
      `#arrival-station-name-input`,
    );
    this.$radioContainer = this.$target.querySelector(`#radio-container`);
    this.$searchButton = this.$target.querySelector(`#search-button`);
  }

  bindEvents() {
    this.$target.addEventListener(`click`, this.onClick.bind(this));
  }

  onClick({ target }) {
    if (target.id !== `search-button`) return;
    const [departure, arrival, option] = this.getInputValues();

    console.log(departure, arrival, option);
  }

  getInputValues() {
    const departureStation = this.$departureInput.value.trim();
    const arrivalStation = this.$arrivalInput.value.trim();
    const option = this.$radioContainer.querySelector(
      `input[name=search-type]:checked`,
    ).value;

    return [departureStation, arrivalStation, option];
  }
}

export default SubwayInput;
