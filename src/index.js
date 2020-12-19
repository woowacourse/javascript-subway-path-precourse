import { stations } from "./data.js";
import { visibleToggle } from "./utils/view.js";
import { searchButtonHanlder } from "./utils/handler.js";

function App() {
  this.stations = stations;
  this.init = () => {
    const searchButton = document.querySelector("#search-button");
    visibleToggle();
    searchButton.addEventListener(
      "click",
      searchButtonHanlder.bind(this.stations)
    );
  };
}

new App().init();
