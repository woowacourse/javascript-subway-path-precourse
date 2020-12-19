import SubwayMap from "./subway-map.js";
import {
  getDepartureStationNameInput,
  getArrivalStationNameInput,
} from "./utils/custom-handlers.js";

const subwayMap = new SubwayMap();

const isInputLengthTwoOrGreater = (input) => {
  if (input.length < 2) {
    alert("역 이름을 두 글자 이상 입력해주세요.");
    return false;
  }
  return true;
};

const isInputStationExist = (station, stationIdentifier) => {
  console.log(station);
  console.log(subwayMap.hasStation(station));
  if (!subwayMap.hasStation(station)) {
    alert(`존재하지 않는 역입니다. ${stationIdentifier}역을 확인해주세요`);
    return false;
  }
  return true;
};

const isInputsValid = (appContainer) => {
  const departureStationName = getDepartureStationNameInput(appContainer).value;
  const arrivalStationName = getArrivalStationNameInput(appContainer).value;

  return (
    isInputLengthTwoOrGreater(departureStationName) &&
    isInputLengthTwoOrGreater(arrivalStationName) &&
    isInputStationExist(departureStationName, "출발") &&
    isInputStationExist(arrivalStationName, "도착")
  );
};

export default function searchButtonHandler(e) {
  console.log("clicked");
  console.log(e.target.parentElement);
  if (isInputsValid(e.target.parentElement)) {
    console.log("Good");
  } else {
    console.log("Bad");
  }
}
