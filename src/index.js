import AppController from './controllers/AppController.js';
import { lines, stations, paths } from './data.js';

export default class SubwayPathFinderApp {
  constructor() {
    new AppController(lines, stations, paths);
  }
}

new SubwayPathFinderApp();
