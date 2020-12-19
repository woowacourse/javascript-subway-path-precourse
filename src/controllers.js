import { SubwayDistancePath, SubwayTimePath } from './models.js';

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

export const initListener = () => {
  searchButton.addEventListener('click', () =>
    console.log(
      'departure: ',
      departureStationNameInput.value,
      'arrival: ',
      arrivalStationNameInput.value,
      'serchType: ',
      aa(serchType)
    )
  );
};
