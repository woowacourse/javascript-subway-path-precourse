import {lines} from "./utils/data.js?ver=30";

export default class processSubwayDirection {
    constructor() {
        this.lines = lines;
        this.directions = [];
    }

    getLinesInStation(stationName) {
        const linesInStation = this.lines.filter(line => line.station.includes(stationName));
        return linesInStation;
    }

    checkNextStation(station, index) {
        return station.length - 1 ? null : station[index + 1];
    }

    recordDirection(stationList) {
        const lineList = this.getLinesInStation(stationList[-1]);
        lineList.forEach(line => {
            const station = line.station;
            this.checkNextStation(station, station.indexOf(stationList[-1]));
        })
    }

    getDirection(startLine, stationName) {
        const startStation = startLine.station;
        const startIndex = startStation.indexOf(stationName);
        const nextStation = this.checkNextStation(startStation, startIndex);
        if(nextStation !== null) {
            this.recordDirection([startStation, nextStation]);
        }
    }

    getMinDistance(stationNames) {
        const startLineList = this.getLinesInStation(stationNames[0]);
        startLineList.forEach(line => {
            this.getDirection(line, stationNames[0]);
        })
        
    }

    getMinTime(stationNames) {

    }
}