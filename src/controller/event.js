import {$departureName, $arrivalName} from '../view/element.js';
import {isInputValid} from './valid.js';
import {subway} from '../index.js';

export const onFindRoute = () => {
  if (isInputValid($departureName.value, $arrivalName.value, subway.station)) {
    checkSelectedRadio();
  }
};

const checkSelectedRadio = () => {
  const $allRadioInput = document.body.querySelectorAll('[name="search-type"]');
  const checkedInput = [...$allRadioInput].find((input) => input.checked);

  return checkedInput.value;
};
