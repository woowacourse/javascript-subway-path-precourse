import Div from "../../subComponents/Div.js";
import InputEndStationContainer from "../inputSection/InputEndStationContainer.js";
import InputStartStationContainer from "../inputSection/InputStartStationContainer.js";
import SubmitButton from "../SubmitButton/SubmitButton.js";
import { INPUT_CONTAINER_ID } from "../../../common/DOMelementNames.js";

export default new Div({
  id: INPUT_CONTAINER_ID,
  children: [
    InputStartStationContainer.element,
    InputEndStationContainer.element,
    // radio selector
    // submit button
    SubmitButton.element,
  ],
});
