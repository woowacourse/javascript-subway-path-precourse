import Typography from "../../subComponents/Typography.js";
import InputEndStation from "./inputs/InputEndStation.js";
import { END_STATION_TEXT } from "../../../common/constants.js";

export default new Typography({
  innerText: END_STATION_TEXT,
  children: [InputEndStation.element],
});
