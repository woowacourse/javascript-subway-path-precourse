function findLineOfTwoStations(data, departure, arrival) {
    let line = false;
    for (let i=0; i<data.length; i++) {
        if (data[i].stations.includes(departure) && data[i].stations.includes(arrival)){
            line = data[i];
        }
    }
    return line;
}

function betweenStations(line, departure, arrival, type){
    const departure_idx = line.stations.indexOf(departure);
    const arrival_idx = line.stations.indexOf(arrival);
    return line.stations[Math.abs(departure_idx + arrival_idx)/2][type];
}

export function totalBetweenStations(data, path, type) {
    let total=0;
    for (let i=0; i<path.length-1; i++) {
        const departure = path[i];
        const arrival = path[i+1];
        total += betweenStations(findLineOfTwoStations(data, departure,arrival), departure, arrival, type)
    }
    return total;
}
