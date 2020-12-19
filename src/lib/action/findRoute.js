import {
  DEPARTURE_STATION_INPUT_ID,
  ARRIVAL_STATION_INPUT_ID,
} from "../common/DOMelementNames.js";

export default () => {
  const $departureStationInput = document.getElementById(
    DEPARTURE_STATION_INPUT_ID,
  );
  const $arrivalStationInput = document.getElementById(
    ARRIVAL_STATION_INPUT_ID,
  );
  console.log($departureStationInput.value, $arrivalStationInput.value);
};
