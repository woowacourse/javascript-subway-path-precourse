import { stations } from "./data.js";
import { visibleToggle } from "./utils/view.js";
function App() {
  this.stations = stations;
  this.init = () => {
    const searchButton = document.querySelector("#search-button");
    visibleToggle();
  };
}

new App().init();
