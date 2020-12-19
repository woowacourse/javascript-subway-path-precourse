import {
  getMinimumPath,
  isValid,
  getMinimumCost,
  setArrivalStation,
  setDepartureStation,
  getFormattedPath,
} from "./utils/functions.js";
import { clearResultDiv, renderResult } from "./utils/visualization.js";

const onSearchButtonClick = function () {
  setDepartureStation();
  setArrivalStation();
  if (!isValid()) {
    alert("Something is wrong.");
    return;
  }
  clearResultDiv();
  const formattedMinPath = getFormattedPath(getMinimumPath());
  const minDistance = getMinimumCost("distance");
  const minTime = getMinimumCost("time");
  renderResult(formattedMinPath, minDistance, minTime);
};
export default onSearchButtonClick;
