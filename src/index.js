import { lines, stations } from './subwayMapData.js';

export default function SubwayPathFinder() {
  loadSubwayMapDataToLocalStorage();
}

const loadSubwayMapDataToLocalStorage = () => {
  localStorage.setItem('lines', JSON.stringify(lines));
  localStorage.setItem('stations', JSON.stringify(stations));
};

new SubwayPathFinder();
