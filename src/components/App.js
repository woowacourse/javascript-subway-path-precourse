import Header from "./Header.js";
import SearchForm from "./SearchForm.js";
import SearchResult from "./SearchResult.js";

export default class App {
  constructor($app) {
    this.$app = $app;
    this.$main = document.createElement("main");
    this.$app.append(this.$main);

    this.header = new Header({ $target: this.$app });
    this.searchForm = new SearchForm({ $target: this.$main });
    this.searchResult = new SearchResult({ $target: this.$main });
  }
}
