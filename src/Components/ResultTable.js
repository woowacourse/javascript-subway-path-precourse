import { INNER_TEXT } from "../Constants/Result.js";
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
    const $totalDistanceValue = this.createThElement(`${5}km`); //TODO: props에서 값을 가지고 와야 함
    const $totalTimeValue = this.createThElement(`${3}분`); //TODO: props에서 값을 가지고 와야 함

    this.$component.append($trValue);
    $trValue.append($totalDistanceValue, $totalTimeValue);
  }

  renderBestRoute() {
    const $tr = document.createElement("tr");
    const $td = document.createElement("td");
    $tr.append($td);
    $td.setAttribute("colspan", 2);
    $td.innerText = "Best Route"; // TODO: 최적 경로로 교체하여야 함

    this.$component.append($tr);
  }


  createThElement(innerText) {
    const $th = document.createElement("th");
    $th.innerText = innerText;

    return $th;
  }

}