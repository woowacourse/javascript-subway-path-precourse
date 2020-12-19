import { onSearchBtnHandler } from "../views/search/searchManager.js";

function addEventToMainBtns() {
  document.getElementById("search-button").addEventListener("click", onSearchBtnHandler);
}

export { addEventToMainBtns };
