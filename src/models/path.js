import paths from "../data/paths.js";
import Dijkstra from "../utils/Dijkstra.js";

const dijkstraForDistance = new Dijkstra();
const dijkstraForTime = new Dijkstra();

paths.forEach(path => {
	const { from, to, distance, minutes } = path;

	dijkstraForDistance.addEdge(from, to, distance);
	dijkstraForDistance.addEdge(to, from, distance);
	dijkstraForTime.addEdge(from, to, minutes);
	dijkstraForTime.addEdge(to, from, minutes);
});

export default {
	isExistStation(name) {
		return paths.some(path => path.from === name || path.to === name);
	}
}
