import onRadioClick from "./on-radio-click.js";
import onSearchButtonClick from "./on-search-button-click.js";

document
  .getElementById("search-button")
  .addEventListener("click", onSearchButtonClick);
document.getElementById("distance").addEventListener("click", onRadioClick);
const searchTypes = document.getElementsByName("search-type");
for (let i = 0; i < searchTypes.length; i++) {
  searchTypes[i].addEventListener("click", onRadioClick);
}
