import Header from "./Header.js";
import SearchForm from "./SearchForm.js";
import SearchResult from "./SearchResult.js";
import { STATIONS, LINES } from "../utils/dummy.js";

export default class App {
  constructor($app) {
    this.$app = $app;
    this.$main = document.createElement("main");
    this.$app.append(this.$main);

    this.lines = LINES;
    this.stations = STATIONS;

    this.header = new Header({ $target: this.$app });
    this.searchForm = new SearchForm({
      $target: this.$main,
      stations: this.stations,
    });
    this.searchResult = new SearchResult({ $target: this.$main });
  }
}
