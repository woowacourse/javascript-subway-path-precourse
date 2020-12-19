export default class UserInput {
  constructor(props) {
    const { startStation, endStation, shortestPathChecked, fastestPathChecked } = props;
    this.startStation = startStation;
    this.endStation = endStation;
    this.shortestPathChecked = shortestPathChecked;
    this.fastestPathChecked = fastestPathChecked;
  }
}
