import { showResult, clearInput } from './views.js';
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
const searchType = document.getElementsByName('search-type');
const searchButton = document.querySelector('#search-button');
const resultDiv = document.querySelector('#result');

export const initListener = subwayPath => {
  searchButton.addEventListener('click', () => {
    clickButton(subwayPath);
  });
};

const clickButton = subwayPath => {
  const validationResult = stationValidation(
    departureStationNameInput.value,
    arrivalStationNameInput.value,
    subwayPath.stationList
  );
  const findPathResult =
    checkradioValue(searchType) === 'distance'
      ? subwayPath.distancePath.findPath(
          departureStationNameInput.value,
          arrivalStationNameInput.value
        )
      : subwayPath.timePath.findPath(
          departureStationNameInput.value,
          arrivalStationNameInput.value
        );
  clearInput(departureStationNameInput, arrivalStationNameInput);

  if (validationResult.success) {
    if (!findPathResult.error) {
      showResult(findPathResult.route, resultDiv);
      // findPathResult.distance 로 타입에 맞는 결과값을 가져온다.
    } else {
      alert(findPathResult.error);
    }
  } else {
    alert(validationResult.error);
  }
};
