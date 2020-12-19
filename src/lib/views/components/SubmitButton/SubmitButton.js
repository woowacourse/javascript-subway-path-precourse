import Button from "../../subComponents/Button.js";
import { BUTTON_HELPER_TEXT } from "../../../common/constants.js";
import { SEARCH_BUTTON_ID } from "../../../common/DOMelementNames.js";
import findRoute from "../../../action/findRoute.js";

export default new Button({
  id: SEARCH_BUTTON_ID,
  helperText: BUTTON_HELPER_TEXT,
  callbackFunction: findRoute,
});
