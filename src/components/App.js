import Header from "./Header.js";
import SearchForm from "./SearchForm.js";
import SearchResult from "./SearchResult.js";
import { STATIONS, SUBWAY_MAP_TIME, SUBWAY_MAP_DISTANCE } from "../utils/dummy.js";

export default class App {
  constructor($app) {
    this.$app = $app;
    this.$main = document.createElement("main");
    this.$app.append(this.$main);

    this.stations = STATIONS;
    this.subwayMapDistance = SUBWAY_MAP_DISTANCE;
    this.subwayMapTime = SUBWAY_MAP_TIME;

    this.departureStationName = "";
    this.arrivalStationName = "";
    this.searchType = "distance";

    this.header = new Header({ $target: this.$app });
    this.searchForm = new SearchForm({
      $target: this.$main,
      stations: this.stations,
      onSubmit: this.onSubmit,
    });
    this.searchResult = new SearchResult({
      $target: this.$main,
      searchType: this.searchType,
      findShortestPathWithDistance: this.findShortestPathWithDistance,
      findShortestPathWithTime: this.findShortestPathWithTime,
    });
  }

  findShortestPathWithDistance = () => {
    return this.subwayMapDistance.findShortestPath(this.departureStationName, this.arrivalStationName);
  };

  findShortestPathWithTime = () => {
    return this.subwayMapTime.findShortestPath(this.departureStationName, this.arrivalStationName);
  };

  getShortestPath = () => {
    if (this.searchType === "distance") {
      return this.findShortestPathWithDistance();
    }

    if (this.searchType === "time") {
      return this.findShortestPathWithTime();
    }
  };

  onSubmit = ({ nextDepartureStationName, nextArrivalStationName, nextSearchType }) => {
    this.setState({ nextDepartureStationName, nextArrivalStationName, nextSearchType });
  };

  setState = (nextState) => {
    const { nextDepartureStationName, nextArrivalStationName, nextSearchType } = nextState;

    this.departureStationName = nextDepartureStationName;
    this.arrivalStationName = nextArrivalStationName;
    this.searchType = nextSearchType;

    this.searchResult.setState({ nextSearchType: this.searchType, nextShortestPath: this.getShortestPath() });
  };
}
