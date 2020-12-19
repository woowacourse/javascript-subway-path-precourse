import { searchButtonElement } from '../elements/subwayPath.js';
import { onSearchPath } from '../handlers/subwayPath.js';

export const setSubwayPathEventListener = () => {
  searchButtonElement.addEventListener('click', onSearchPath);
};

export default {
  setSubwayPathEventListener,
};
