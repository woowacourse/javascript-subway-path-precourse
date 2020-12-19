import { lineList, stationList } from '../share/defaultInformation.js';

export default class SubWayPath {
  constructor() {
    this.stationList = stationList;
    this.lineList = lineList;
  }
}
