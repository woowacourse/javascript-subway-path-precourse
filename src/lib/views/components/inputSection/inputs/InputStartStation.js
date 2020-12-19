import Input from "../../../subComponents/Input.js";
import { START_STATION_TEXT } from "../../../../common/constants.js";
import { DEPARTURE_STATION_INPUT_ID } from "../../../../common/DOMelementNames.js";

export default new Input({
  id: DEPARTURE_STATION_INPUT_ID,
  helperText: START_STATION_TEXT,
});
