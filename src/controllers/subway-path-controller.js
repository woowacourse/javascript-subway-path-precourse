import SubwayPathInput from '../views/subway-path-input.js';
import SubwayPathOutput from '../views/Subway-path-output.js';

export default class SubwayPathController {
	constructor() {
		this.subwayPathOutput = new SubwayPathOutput();
		this.subwayPathInput = new SubwayPathInput();
	}
}