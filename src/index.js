import searchHandler from "./Search/index.js";
import { registerInitialLineInfo } from "./utils/lineData.js";

const app = document.getElementById("app");

const init = () => {
  const searchButton = document.getElementById("search-button");
  const lineData = registerInitialLineInfo();

  searchButton.addEventListener("click", () => {
    searchHandler(lineData);
  });
};

if (app) {
  init();
}
