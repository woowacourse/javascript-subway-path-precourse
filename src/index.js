import searchHandler from "./Search/index.js";
import { registerInitialLineInfo } from "./utils/lineData.js";
import { STATION } from "./constants/index.js";

const app = document.getElementById("app");

const init = () => {
  const data = registerInitialLineInfo();

  const searchButton = document.getElementById("search-button");

  searchButton.addEventListener("click", searchHandler);
};

if (app) {
  init();
}
