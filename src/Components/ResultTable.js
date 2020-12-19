import { INNER_TEXT } from "../Constants/Result.js";
import { calculateTotalDistanceAndTime } from "../utils/Calculator.js";
import AbstractComponent from "./AbstractComponent.js";

export default class ResultTable extends AbstractComponent {
  constructor(props) {
    super(props);

    this.render();
  }

  render() {
    super.render();
    this.renderDistanceAndTime();
    this.renderBestRoute();
  }

  renderDistanceAndTime() {
    this.renderDistanceAndTimeHeader();
    this.renderDistanceAndTimeValue();
  }

  renderDistanceAndTimeHeader() {
    const $trHeader = document.createElement("tr");
    const $totalDistanceHeader = this.createThElement(INNER_TEXT.TOTAL_DISTANCE);
    const $totalTimeHeader = this.createThElement(INNER_TEXT.TOTAL_TIME);

    this.$component.append($trHeader);
    $trHeader.append($totalDistanceHeader, $totalTimeHeader);
  }

  renderDistanceAndTimeValue() {
    const $trValue = document.createElement("tr");
    const { routes } = this.props;
    const [totalDistance, totalTime] = calculateTotalDistanceAndTime(routes);
    const $totalDistanceValue = this.createThElement(`${totalDistance}km`); //TODO: props에서 값을 가지고 와야 함
    const $totalTimeValue = this.createThElement(`${totalTime}분`); //TODO: props에서 값을 가지고 와야 함

    this.$component.append($trValue);
    $trValue.append($totalDistanceValue, $totalTimeValue);
  }

  renderBestRoute() {
    const { routes } = this.props;
    const $tr = document.createElement("tr");
    const $td = document.createElement("td");
    $tr.append($td);
    $td.setAttribute("colspan", 2);
    $td.innerText = routes.join("➡");

    this.$component.append($tr);
  }

  createThElement(innerText) {
    const $th = document.createElement("th");
    $th.innerText = innerText;

    return $th;
  }

}