import {
  loadSubwayMapDataToLocalStorage,
  makeSubwayMapGraphAll,
} from './managers/data-storage-manager.js';
import { appendView } from './managers/view-manager.js';

export default function SubwayPathFinder() {
  loadSubwayMapDataToLocalStorage();
  makeSubwayMapGraphAll();
  appendView();
}

new SubwayPathFinder();
