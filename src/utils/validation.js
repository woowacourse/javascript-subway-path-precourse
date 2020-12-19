import { LENGTH, MESSAGE } from '../constants/constants.js';
import { showAlert } from '../utils/handleDom.js';

export const checkStationNameisValid = (departure, arrival) => {
  let errors = getErrorOfStationName(departure, arrival);

  if (errors) {
    showAlert(errors);
    return false;
  }
  return true;
};

const getErrorOfStationName = (departure, arrival) => {
  let errors = '';

  if (isLengthUnderTwo(departure)) {
    errors += MESSAGE.DEPART_NAME_LENGTH_ERROR;
  }
  if (isLengthUnderTwo(arrival)) {
    errors += MESSAGE.ARRIVAL_NAME_LENGTH_ERROR;
  }

  return errors;
};

const isLengthUnderTwo = (name) => {
  return name.length < LENGTH.NAME_LENGTH_LIMIT;
};
