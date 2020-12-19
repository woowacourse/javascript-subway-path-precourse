import { station } from '../data/station.js';
import { getReuslt } from '../utils/getResult.js';

const MIN_STATION_LENGTH = 2;

const checkLength = (inputStations) => {
  return inputStations.every((name) => name.length >= MIN_STATION_LENGTH);
};

const checkExistStation = (inputStations) => {
  return inputStations.every((name) => station.includes(name));
};

const checkDuplicate = (inputStations) => {
  if (inputStations[0] === inputStations[1]) {
    return false;
  }
  return true;
};

const checkInputValue = () => {
  const inputStations = getInputStations();

  if (!checkLength(inputStations)) {
    return alert(`역 이름은 최소 ${MIN_STATION_LENGTH}글자 이상이어야 합니다.`);
  }
  if (!checkDuplicate(inputStations)) {
    return alert('출발역과 도착역은 다른 역을 선택해야 합니다.');
  }
  if (!checkExistStation(inputStations)) {
    return alert('존재하지 않는 역은 입력할 수 없습니다.');
  }
  return getReuslt(inputStations);
};

const getInputStations = () => {
  const startStation = document.querySelector('#departure-station-name-input');
  const endStation = document.querySelector('#arrival-station-name-input');
  return [startStation.value, endStation.value];
};

export const input = () => {
  const $searchButton = document.querySelector('#search-button');

  $searchButton.addEventListener('click', checkInputValue);
};
