import { subwayPathManager } from './manager.js';

export default class SubwayPath {
  constructor() {
    this.subwayManagerStart();
  }

  subwayManagerStart = () => {
    document
      .getElementById('search-button')
      .addEventListener('click', subwayPathManager.getStations);
  };
}

new SubwayPath();
