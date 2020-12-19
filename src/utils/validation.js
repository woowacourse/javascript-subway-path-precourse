import { MESSAGE } from "../constants/index.js";

export const checkEmpty = (departureStation, arrivalStation) => {
  const departureIsEmpty = departureStation.trim().length === 0 ? true : false;
  const arrivalIsEmpty = arrivalStation.trim().length === 0 ? true : false;

  console.log(departureIsEmpty || arrivalIsEmpty);
  return departureIsEmpty || arrivalIsEmpty;
};

export const checkBlank = (departureStation, arrivalStation) => {
  const departureBlack =
    departureStation.trim().length === departureStation.length ? false : true;
  const arrivalBlack =
    arrivalStation.trim().length === arrivalStation.length ? false : true;

  return departureBlack || arrivalBlack;
};

export const checkTheList = (checkList) => {
  const { isEmpty, isBlank } = checkList;

  if (isEmpty) {
    alert(MESSAGE.EMPTY);
  } else if (isBlank) {
    alert(MESSAGE.BLANK);
  } else {
    return true;
  }
};
