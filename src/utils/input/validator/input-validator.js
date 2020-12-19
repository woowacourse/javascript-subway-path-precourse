import { lines } from "../../../data.js";

function isValidStation(input) {
  const allStationArray = [...allStations()];
  let isValid = false;

  if (!allStationArray.includes(input)) {
    isValid = true;
  }

  return isValid;
}

function allStations() {
  const allStations = [];
  for (const line of lines) {
    for (const station of line.stations) {
      allStations.push(station.name);
    }
  }
  const notDuplicatedStations = new Set([...allStations]);

  return notDuplicatedStations;
}

export function validateInput(input) {
  const MINIMUM_INPUT_LENGTH = 2;
  const noSpaceInput = input.trim();

  let isValid = false;

  if (noSpaceInput.length < MINIMUM_INPUT_LENGTH) {
    alert("2글자 이상의 역 이름을 입력하셔야 합니다!");
  } else if (isValidStation(noSpaceInput)) {
    alert("존재하지 않는 역입니다.");
  } else {
    isValid = true;
  }

  return isValid;
}

export function checkIfStartAndEndSame(startStation, endStation) {
  if (startStation === endStation) {
    alert("출발역과 도착역은 같을 수 없습니다.");
  }
}
