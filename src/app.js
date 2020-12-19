import Stations from './models/stations.js';

export default class App {
  constructor($target) {
    this.$target = $target;
    new Stations();
  }
}
