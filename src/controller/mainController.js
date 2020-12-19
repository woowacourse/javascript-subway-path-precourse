import { ids, words } from '../keys.js';
import { edges, stations } from '../data.js';
import Dijkstra from '../utils/Dijkstra.js';

const getStartPointValue = () =>
	document.getElementById(ids.STARTPOINT_INPUT_ID).value;

const getEndPointValue = () =>
	document.getElementById(ids.ENDPOINT_INPUT_ID).value;

const getSearhType = () => {
	const radioButtons = document.getElementsByName(ids.RADIO_BUTTON_NAME);
	for (const radioButton of radioButtons) {
		if (radioButton.checked) return radioButton.value;
	}
};

const getEdgeByStations = (start, end) => {
	for (const edge of edges) {
		if (
			(edge.from === start && edge.to === end) ||
			(edge.from === end && edge.to === start)
		) {
			return [edge.time, edge.distance];
		}
	}
};

const getTotalTimeAndDistance = (dijkstraResultPath) => {
	let [totalTime, totalDistance] = [0, 0];
	while (dijkstraResultPath.length > 0) {
		const currStation = dijkstraResultPath.shift();
		const nextStation = dijkstraResultPath.shift();
		const [spentTime, spentDistance] = getEdgeByStations(
			currStation,
			nextStation
		);
		totalTime += spentTime;
		totalDistance += spentDistance;
	}
	return [totalTime, totalDistance];
};

const applyDijkstra = (type) => {
	const key = type === words.SHORTEST_PATH ? 'distance' : 'time';
	const [start, end] = [getStartPointValue(), getEndPointValue()];
	const dijkstra = new Dijkstra();
	let [totalPath, totalTime, totalDistance] = [[], 0, 0];
	edges.forEach((edge) => {
		dijkstra.addEdge(edge.from, edge.to, edge[key]);
	});
	totalPath = dijkstra.findShortestPath(start, end);
	[totalTime, totalDistance] = getTotalTimeAndDistance(totalPath);
	return [totalPath, totalTime, totalDistance];
};

export const findPathButtonHandler = () => {
	console.log(applyDijkstra(getSearhType()));
};
