import { INITIAL_STATION, MESSAGE } from "../constants/index.js";

export const checkEmpty = (departureStation, arrivalStation) => {
  const departureIsEmpty = departureStation.trim().length === 0 ? true : false;
  const arrivalIsEmpty = arrivalStation.trim().length === 0 ? true : false;

  return departureIsEmpty || arrivalIsEmpty;
};

export const checkBlank = (departureStation, arrivalStation) => {
  const departureBlack =
    departureStation.trim().length === departureStation.length ? false : true;
  const arrivalBlack =
    arrivalStation.trim().length === arrivalStation.length ? false : true;

  return departureBlack || arrivalBlack;
};

export const checkStationExist = (departureStation, arrivalStation) => {
  let isExist = false;

  if (
    INITIAL_STATION.includes(departureStation) &&
    INITIAL_STATION.includes(arrivalStation)
  ) {
    isExist = true;
  }

  return isExist;
};

export const checkTheList = (checkList) => {
  const { isEmpty, isBlank, isExist } = checkList;

  if (isEmpty) {
    alert(MESSAGE.EMPTY);
  } else if (isBlank) {
    alert(MESSAGE.BLANK);
  } else if (!isExist) {
    alert(MESSAGE.EXIST);
  } else {
    return true;
  }
};
