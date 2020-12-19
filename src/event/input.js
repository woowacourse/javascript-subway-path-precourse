import { station } from '../data/station.js';

const checkValidLine = () => {
  //
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

const getInputStations = () => {
  const startStation = document.querySelector('#departure-station-name-input');
  const endStation = document.querySelector('#arrival-station-name-input');
  return [startStation.value, endStation.value];
};

const checkInputValue = () => {
  const inputStations = getInputStations();

  if (!checkDuplicate(inputStations)) {
    return alert('출발역과 도착역은 다른 역을 선택해야 합니다.');
  }
  if (!checkExistStation(inputStations)) {
    return alert('존재하지 않는 역은 입력할 수 없습니다.');
  }
  if (!checkValidLine(inputStations)) {
    return alert('연결되지 않은 노선은 조회할 수 없습니다.');
  }
  return console.log('ok');
};

export const input = () => {
  const $searchButton = document.querySelector('#search-button');

  $searchButton.addEventListener('click', checkInputValue);
};
