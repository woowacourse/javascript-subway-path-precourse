export const departureStationNameInputElement = document.getElementById(
  'departure-station-name-input'
);
export const arrivalStationNameInputElement = document.getElementById(
  'arrival-station-name-input'
);
const searchOptionRadioElements = document.querySelectorAll(
  'input[name="search-type"]'
);
export const minDistancePathSearchRadioElement = searchOptionRadioElements[0];
export const minTimePathSearchRadioElement = searchOptionRadioElements[1];
export const resultTableBodyElement = document.getElementById(
  'result-table-body'
);
export const resultElement = document.getElementById('result');
export const searchButtonElement = document.getElementById('search-button');

export default {
  departureStationNameInputElement,
  minDistancePathSearchRadioElement,
  minTimePathSearchRadioElement,
  searchButtonElement,
  resultTableBodyElement,
  resultElement,
};
