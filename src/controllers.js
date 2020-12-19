import { SubwayDistancePath, SubwayTimePath } from './models.js';
import stationValidation from './utils/validation.js';

const checkradioValue = lst => {
  for (let l of lst) {
    if (l.checked) return l.value;
  }
};
const departureStationNameInput = document.querySelector(
  '#departure-station-name-input'
);
const arrivalStationNameInput = document.querySelector(
  '#arrival-station-name-input'
);
const serchType = document.getElementsByName('search-type');
const searchButton = document.querySelector('#search-button');

export const initListener = subwayPath => {
  searchButton.addEventListener('click', () => {
    console.log(
      'departure: ',
      departureStationNameInput.value,
      'arrival: ',
      arrivalStationNameInput.value,
      'serchType: ',
      checkradioValue(serchType)
    );
    // console.log('subwayPath', subwayPath.stationList);
    const result = stationValidation(
      departureStationNameInput.value,
      arrivalStationNameInput.value,
      subwayPath.stationList
    );
    if (result === 'ok') {
    } else {
      alert(result);
    }
  });
};
