import { errorMessage, ids, words } from '../keys.js';
import { edges, stations } from '../data.js';
import Dijkstra from '../utils/Dijkstra.js';
import TableContainer from '../view/table.js';
import { getValidInput } from './stationInputController.js';
import {
	appendChilds,
	clearAllContents,
	makeElement,
} from '../utils/elementUtils.js';

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

const applyDijkstra = (type, start, end) => {
	const key = type === words.SHORTEST_PATH ? 'distance' : 'time';
	const dijkstra = new Dijkstra();
	let [totalPath, totalTime, totalDistance] = [[], 0, 0];
	edges.forEach((edge) => {
		dijkstra.addEdge(edge.from, edge.to, edge[key]);
	});
	totalPath = dijkstra.findShortestPath(start, end);
	if (!isPathExisted(totalPath)) return [totalPath, totalTime, totalDistance];
	[totalTime, totalDistance] = getTotalTimeAndDistance(totalPath.slice());
	return [totalPath, totalTime, totalDistance];
};

const isPathExisted = (totalPath) => {
	if (!totalPath) {
		alert(errorMessage.CANNOT_FIND);
		return false;
	}
	return true;
};

export const findPathButtonHandler = () => {
	const resultContainer = document.querySelector('button + div');
	const [start, end] = getValidInput();
	const searchType = getSearhType();
	let [totalPath, totalTime, totalDistance] = [[], 0, 0];
	clearAllContents(resultContainer);
	if (start === 0 && end === 0) return;
	[totalPath, totalTime, totalDistance] = applyDijkstra(searchType, start, end);
	if (!totalPath) return;
	appendChilds(resultContainer, [
		makeElement({ tag: 'p', innerText: searchType }),
		new TableContainer({ totalTime, totalDistance, totalPath }).initializer(),
	]);
};
