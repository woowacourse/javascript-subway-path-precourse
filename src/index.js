import {
  CLICK,
  DISTANCE,
  SEARCH_BUTTON_ID,
  SEARCH_TYPE_NAME,
} from "../constant.js";
import onRadioClick from "./on-radio-click.js";
import onSearchButtonClick from "./on-search-button-click.js";

document
  .getElementById(SEARCH_BUTTON_ID)
  .addEventListener(CLICK, onSearchButtonClick);
document.getElementById(DISTANCE).addEventListener(CLICK, onRadioClick);
const searchTypes = document.getElementsByName(SEARCH_TYPE_NAME);
for (let i = 0; i < searchTypes.length; i++) {
  searchTypes[i].addEventListener(CLICK, onRadioClick);
}
