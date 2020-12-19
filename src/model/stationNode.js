export class StationNode {
    constructor(startStation, endStation, timeAndDistance) {
        this.startStation = startStation;
        this.endStation = endStation;
        this.node = [startStation, endStation];
        this.selection = timeAndDistance;
    }
}