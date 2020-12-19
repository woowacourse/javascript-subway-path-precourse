import processStationNames from "./process-station-names.js";
import processSubwayDirection from "./process-subway-direction.js";

export default class Index {
    constructor() {
        this.processStationNames = new processStationNames();
        this.processSubwayDirection = new processSubwayDirection();
    }
}

new Index();