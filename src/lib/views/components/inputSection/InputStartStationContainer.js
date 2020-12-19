import Typography from "../../subComponents/Typography.js";
import InputStartStation from "./inputs/InputStartStation.js";
import { START_STATION_TEXT } from "../../../common/constants.js";

export default new Typography({
  innerText: START_STATION_TEXT,
  children: [InputStartStation.element],
});
