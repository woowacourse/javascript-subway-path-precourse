import SubwayPathController from './controllers/subway-path-controller.js';

export default class SubwayPathApp {
	constructor() {
		this.subwayPathController = new SubwayPathController();
	}
}

new SubwayPathApp();