export class Station {
    constructor(name, line, connectedStation = []) {
        this.name = name;
        this.line = line;
        this.connectedStation = connectedStation;
    }
}