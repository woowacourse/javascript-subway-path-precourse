import AppController from './controllers/AppController.js';
import { stations, lines, paths } from './data.js';

export default class SubwayPathFinderApp {
  constructor() {
    new AppController(stations, lines, paths);
  }
}

new SubwayPathFinderApp();
