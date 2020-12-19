import Input from "../../../subComponents/Input.js";
import {
  END_STATION_TEXT,
  INPUT_HELPER_TEXT,
} from "../../../../common/constants.js";
import { ARRIVAL_STATION_INPUT_ID } from "../../../../common/DOMelementNames.js";

import findRoute from "../../../../action/findRoute.js";

export default new Input({
  id: ARRIVAL_STATION_INPUT_ID,
  helperText: END_STATION_TEXT + INPUT_HELPER_TEXT,
  callbackFunction: findRoute,
});
