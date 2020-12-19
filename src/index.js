import StationPathView from './StationPathView.js'
import StationPathController from './StationPathController.js';

const stationView = new StationPathView();
const stationPathController = new StationPathController();

stationView.view();
stationPathController.eventHandler();
