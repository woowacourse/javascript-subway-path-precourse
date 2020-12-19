import { LINES, STATIONS } from '../configuration.js';

export const loadSubwayMapDataToLocalStorage = () => {
  localStorage.setItem('lines', JSON.stringify(LINES));
  localStorage.setItem('stations', JSON.stringify(STATIONS));
};
