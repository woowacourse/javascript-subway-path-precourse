import {$resultWrapper} from './element.js';

export const removeResultScreen = () => {
  while ($resultWrapper.firstChild) {
    $resultWrapper.removeChild($resultWrapper.firstChild);
  }
};
