import {$departureName, $arrivalName} from '../view/element.js';
import {isInputValid} from './valid.js';
import {subway} from '../index.js';

export const onFindRoute = () => {
  if (isInputValid($departureName.value, $arrivalName.value, subway.station)) {
    console.log('good');
  }
};
