import { showResult } from './views.js';
import stationValidation from './utils/validation.js';

const checkRadioValue = lst => {
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

const getFindPathResult = subwayPath => {
  if (checkRadioValue(searchType) === 'distance') {
    const result = subwayPath.distancePath.findPath(
      departureStationNameInput.value,
      arrivalStationNameInput.value
    );
    const route = result.route;
    const totalDistance = result.distance[arrivalStationNameInput.value];
    const totalTime = 'X'; //시간 구하는 함수 필요
    return { route, totalDistance, totalTime };
  }
  const result = subwayPath.timePath.findPath(
    departureStationNameInput.value,
    arrivalStationNameInput.value
  );
  const route = result.route;
  const totalDistance = 'X'; //거리 구하는 함수 필요
  const totalTime = result.distance[arrivalStationNameInput.value];
  return { route, totalDistance, totalTime };
};

const clickButton = subwayPath => {
  const validationResult = stationValidation(
    departureStationNameInput.value,
    arrivalStationNameInput.value,
    subwayPath.stationList
  );
  const findPathResult = getFindPathResult(subwayPath);

  if (validationResult.success) {
    if (!findPathResult.error) {
      showResult(
        findPathResult.route,
        findPathResult.totalDistance,
        findPathResult.totalTime,
        resultDiv
      );
    } else {
      alert(findPathResult.error);
    }
  } else {
    alert(validationResult.error);
  }
};

const finalDistance = (arrival, distanceResult) => {
  return distanceResult[arrival];
};
