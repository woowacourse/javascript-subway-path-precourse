import { loadSubwayMapDataToLocalStorage } from './managers/data-storage-manager.js';
import { appendView } from './managers/view-manager.js';

export default function SubwayPathFinder() {
  loadSubwayMapDataToLocalStorage();
  appendView();
}

new SubwayPathFinder();
