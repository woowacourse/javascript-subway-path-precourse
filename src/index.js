import { stations } from "./data.js";

function App() {
  this.stations = stations;
  this.init = () => {
    const searchButton = document.querySelector("#search-button");
    console.log(this.stations);
  };
}

new App().init();
