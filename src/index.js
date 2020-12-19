import SubwayView from './view/subway.view.js';
import SubwayListener from './listener/subway.listener.js';
import SubwayAPP from './app/subway.app.js';

new SubwayListener(new SubwayAPP(), new SubwayView());
