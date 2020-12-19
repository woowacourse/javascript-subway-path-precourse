const includesBothStations = (connectedStations, startStation, endStation) => {
	if (connectedStations.includes(startStation) && connectedStations.includes(endStation)) {
		return true;
	}
}

export const isIncludesBothStations = (connectedStations, startStation, endStation) => {
	return includesBothStations(connectedStations, startStation, endStation);
}