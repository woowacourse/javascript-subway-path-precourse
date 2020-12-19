import { initalData } from '../../data/data.js';

export default class SubwayMap {
  #allLines;
  constructor() {
    this.#allLines = initalData;
  }

  get allLines() {
    return this.#allLines;
  }

  static isStationExist(stationName) {
    let isExist = false;
    const allLineNames = Object.keys(this.#allLines);
    allLineNames.forEach((lineName) => {
      const line = this.#allLines[lineName];
      line.forEach((registerdStationName) => {
        if (registerdStationName === stationName) {
          isExist = true;
        }
      });
    });

    return isExist;
  }
}
