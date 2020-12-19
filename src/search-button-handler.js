import {
  getDepartureStationNameInput,
  getArrivalStationNameInput,
} from "./utils/custom-handlers.js";

const isInputLengthTwoOrGreater = (input) => {
  if (input.length < 2) {
    alert("역 이름을 두 글자 이상 입력해주세요.");
    return false;
  }
  return true;
};

const isInputsValid = (appContainer) => {
  const departureStationName = getDepartureStationNameInput(appContainer).value;
  const arrivalStationName = getArrivalStationNameInput(appContainer).value;

  return (
    isInputLengthTwoOrGreater(departureStationName) &&
    isInputLengthTwoOrGreater(arrivalStationName)
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
