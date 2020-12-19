import {$departureName, $arrivalName} from '../view/element.js';
import {isInputValid} from './valid.js';
import {subway} from '../index.js';

export const onFindRoute = () => {
  const departure = $departureName.value;
  const arrival = $arrivalName.value;
  if (isInputValid(departure, arrival, subway.station)) {
    const checkedValue = checkSelectedRadio();
    if (checkedValue === '최단거리') {
      const shortDistance = subway.findShortDistance(departure, arrival);
      return addResultScreen(shortDistance);
    }
    const shortTime = subway.findShortTime(departure, arrival);

    return addResultScreen(shortTime);
  }
};

const checkSelectedRadio = () => {
  const $allRadioInput = document.body.querySelectorAll('[name="search-type"]');
  const checkedInput = [...$allRadioInput].find((input) => input.checked);

  return checkedInput.value;
};
