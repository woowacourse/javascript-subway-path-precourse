import { LENGTH, MESSAGE } from '../constants/constants.js';
import { showAlert } from '../utils/handleDom.js';
import { stations } from '../data/data.js';

export const checkStationNameisValid = (departure, arrival) => {
  let errors = getErrorOfStationNameLength(departure, arrival);

  return judgeErrors(errors);
};

export const checkTargetStationIncludedInStation = (departure, arrival) => {
  let errors = getErrorOfTargetStationIncludedInStation(departure, arrival);

  return judgeErrors(errors);
};

export const checkIsSame = (departure, arrival) => {
  let errors = getErrorsOfSameProblem(departure, arrival);

  return judgeErrors(errors);
};

const judgeErrors = (errors) => {
  if (errors) {
    showAlert(errors);
    return false;
  }
  return true;
};

const getErrorOfStationNameLength = (departure, arrival) => {
  let errors = '';

  if (isLengthUnderTwo(departure)) {
    errors += MESSAGE.DEPART_NAME_LENGTH_ERROR;
  }
  if (isLengthUnderTwo(arrival)) {
    errors += MESSAGE.ARRIVAL_NAME_LENGTH_ERROR;
  }

  return errors;
};

const getErrorOfTargetStationIncludedInStation = (departure, arrival) => {
  let errors = '';

  if (!isIncludedInStations(departure)) {
    errors += MESSAGE.DEPART_NAME_INCLUDE_ERROR;
  }
  if (!isIncludedInStations(arrival)) {
    errors += MESSAGE.ARRIVAL_NAME_INCLUDE_ERROR;
  }

  return errors;
};

const getErrorsOfSameProblem = (departure, arrival) => {
  let errors = '';

  if (isSame(departure, arrival)) {
    errors += MESSAGE.DEPART_ARRIVAL_SAME_ERROR;
  }

  return errors;
};

const isLengthUnderTwo = (name) => {
  return name.length < LENGTH.NAME_LENGTH_LIMIT;
};

const isIncludedInStations = (name) => {
  return stations.includes(name);
};

const isSame = (departure, arrival) => {
  return departure === arrival;
};
