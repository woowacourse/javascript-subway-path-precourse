import paths from "../data/paths.js";
import Dijkstra from "../utils/Dijkstra.js";

const dijkstraForDistance = new Dijkstra();
const dijkstraForTime = new Dijkstra();

paths.forEach((path) => {
	const { from, to, distance, minutes } = path;

	dijkstraForDistance.addEdge(from, to, distance);
	dijkstraForDistance.addEdge(to, from, distance);
	dijkstraForTime.addEdge(from, to, minutes);
	dijkstraForTime.addEdge(to, from, minutes);
});

export default {
	isExistStation(name) {
		return paths.some((path) => path.from === name || path.to === name);
	},

	getShortestDistancePath(from, to) {
		const paths = dijkstraForDistance.findShortestPath(from, to);
		const distance = this.getDistanceFromPaths(paths);
		const time = this.getTimeFromPaths(paths);

		return { paths, distance, time };
	},

	getShortestTimePath(from, to) {
		const paths = dijkstraForTime.findShortestPath(from, to);
		const distance = this.getDistanceFromPaths(paths);
		const time = this.getTimeFromPaths(paths);

		return { paths, distance, time };
	},

	getPath(from, to) {
		return paths.find(
			(path) =>
				(path.from === from && path.to === to) ||
				(path.to === from && path.from === to)
		);
	},

	getDistanceFromPaths(paths) {
		return paths.reduce(
			(distance, from, idx) =>
				idx === paths.length - 1
					? distance
					: distance + this.getPath(from, paths[idx + 1]).distance,
			0
		);
	},

	getTimeFromPaths(paths) {
		return paths.reduce(
			(minutes, from, idx) =>
				idx === paths.length - 1
					? minutes
					: minutes + this.getPath(from, paths[idx + 1]).minutes,
			0
		);
	},
};
