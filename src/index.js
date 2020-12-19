import getStationNames from "./get-station-names.js";
import getSubwayDirection from "./get-subway-direction.js";

export default class Index {
    constructor() {
        this.getStationNames = new getStationNames();
        this.getSubwayDirection = new getSubwayDirection();
    }
}

new Index();