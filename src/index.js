import searchHandler from "./Search/index.js";

const app = document.getElementById("app");

const init = () => {
  const searchButton = document.getElementById("search-button");

  searchButton.addEventListener("click", searchHandler);
};

if (app) {
  init();
}
