import {$departureName, $arrivalName} from '../view/element.js';
import {renderResultScreen} from '../view/add-screen.js';
import {removeResultScreen} from '../view/remove-screen.js';
import {isInputValid} from './valid.js';
import {subway} from '../index.js';

export const onFindRoute = () => {
  const departure = $departureName.value;
  const arrival = $arrivalName.value;
  if (isInputValid(departure, arrival, subway.station)) {
    removeResultScreen();
    const checkedValue = checkSelectedRadio();
    if (checkedValue === '최단거리') {
      const shortDistance = subway.findShortDistance(departure, arrival);
      return renderResultScreen(checkedValue, shortDistance);
    }
    const shortTime = subway.findShortTime(departure, arrival);

    return renderResultScreen(checkedValue, shortTime);
  }
};

const checkSelectedRadio = () => {
  const $allRadioInput = document.body.querySelectorAll('[name="search-type"]');
  const checkedInput = [...$allRadioInput].find((input) => input.checked);

  return checkedInput.value;
};
