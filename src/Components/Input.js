import { ID, INNER_TEXT, NAME } from "../Constants/Input.js";
import { isValidStationName } from "../utils/InputValidator.js";
import AbstractComponent from "./AbstractComponent.js";

export default class Input extends AbstractComponent {
  constructor(props) {
    super(props);
    this.render();
    this.addClickEventListener();
  }

  render() {
    super.render();
    this.renderDepartureStationField();
    this.renderArrivalStationField();
    this.renderSearchTypeRadioButton();
    this.renderSearchButton();
  }

  renderDepartureStationField() {
    const $departureStationField = document.createElement("div");
    [
      this.$departureStationLabel,
      this.$departureStationInput
    ] = this.createStationField({
      inputId: ID.DEPARTURE_STATION_NAME_INPUT,
      labelName: INNER_TEXT.DEPARTURE_STATION_NAME_LABEL
    });

    this.$component.append($departureStationField);
    $departureStationField.append(this.$departureStationLabel,this.$departureStationInput);
  }

  renderArrivalStationField() {
    const $arrivalStationField = document.createElement("div");
    [
      this.$arrivalStationLabel,
      this.$arrivalStationInput
    ] = this.createStationField({
      inputId: ID.ARRIVAL_STATION_NAME_INPUT,
      labelName: INNER_TEXT.ARRIVAL_STATION_NAME_LABEL
    });

    this.$component.append($arrivalStationField);
    $arrivalStationField.append(this.$arrivalStationLabel,this.$arrivalStationInput);
  }

  renderSearchTypeRadioButton() {
    const $radioButtonField = document.createElement("div");
    this.renderShortestDistanceRadioButtonField($radioButtonField);
    this.renderShortestTimeRadioButtonField($radioButtonField);
    
    this.$component.append($radioButtonField);
  }

  renderShortestDistanceRadioButtonField($parent) {
    [
      this.$shortestDistanceRadioButton,
      this.$shortestDistanceRadioButtonLabel
    ] = this.createSearchTypeRadioButtonField({
      buttonId: ID.SHORTEST_DISTANCE_RADIO_BUTTON,
      value: INNER_TEXT.SHORTEST_DISTANCE_RADIO_BUTTON_LABEL
    });
    this.$shortestDistanceRadioButton.checked = true;
    
    $parent.append(
      this.$shortestDistanceRadioButton,
      this.$shortestDistanceRadioButtonLabel);
  }

  renderShortestTimeRadioButtonField($parent) {
    [
      this.$shortestTimeRadioButton,
      this.$shortestTimeRadioButtonLabel
    ] = this.createSearchTypeRadioButtonField({
      buttonId: ID.SHORTEST_TIME_RADIO_BUTTON,
      value: INNER_TEXT.SHORTEST_TIME_RADIO_BUTTON_LABEL
    });

    $parent.append(
      this.$shortestTimeRadioButton,
      this.$shortestTimeRadioButtonLabel
    );
  }

  renderSearchButton() {
    this.$searchButton = document.createElement("button");
    this.$searchButton.innerText = INNER_TEXT.SEARCH_BUTTON;
    this.$searchButton.style.type = "block";

    this.$component.append(this.$searchButton);
  }

  createStationField({ inputId, labelName }) {
    const $label = document.createElement("label");
    $label.htmlFor = inputId;
    $label.innerText = labelName;

    const $input = document.createElement("input");
    $input.id = inputId;
    $input.type = "text";

    return [$label, $input];
  }

  createSearchTypeRadioButtonField({ buttonId, value }) {
    const $radioButton = document.createElement("input");
    $radioButton.type = "radio";
    $radioButton.name = NAME.SEARCH_TYPE_RADIO_BUTTON;
    $radioButton.id = buttonId;
    $radioButton.value = value;

    const $radioButtonLabel = document.createElement("label");
    $radioButtonLabel.htmlFor = buttonId;
    $radioButtonLabel.innerText = value;

    return [$radioButton, $radioButtonLabel];
  }

  addClickEventListener() {
    this.$component.addEventListener("submit", event => {
      event.preventDefault();
      this.handleSearchRoute();
    });
  }

  handleSearchRoute() {
    const departure = this.$departureStationInput.value;
    const arrival = this.$arrivalStationInput.value;
    const isShortedDistanceChecked = this.$shortestDistanceRadioButton.checked;

    if (isValidStationName(departure) && isValidStationName(arrival)) {
      console.log(departure, arrival, isShortedDistanceChecked);
      // TODO: 최적의 경로를 찾아라!
    }
  }
}