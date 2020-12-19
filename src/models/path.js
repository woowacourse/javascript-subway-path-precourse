import paths from "../data/paths.js";

export default {
	isExistStation(name) {
		return paths.some(path => path.from === name || path.to === name);
	}
}
