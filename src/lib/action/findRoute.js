import UserInput from "../controllers/inputValidation/userInput.js";
import InputValidation from "../controllers/inputValidation/inputValidation.js";

import {
  DEPARTURE_STATION_INPUT_ID,
  ARRIVAL_STATION_INPUT_ID,
  SHORTEST_PATH_SELECT_ID,
  FASTEST_PATH_SELECT_ID,
} from "../common/DOMelementNames.js";

const getUserInput = () => {
  return new UserInput({
    startStation: document.getElementById(DEPARTURE_STATION_INPUT_ID).value,
    endStation: document.getElementById(ARRIVAL_STATION_INPUT_ID).value,
    shortestPathChecked: document.getElementById(SHORTEST_PATH_SELECT_ID)
      .checked,
    fastestPathChecked: document.getElementById(FASTEST_PATH_SELECT_ID).checked,
  });
};

export default () => {
  const userInput = getUserInput();
  const inputValidation = new InputValidation(userInput);
  const { ok, message } = inputValidation.getResult();
  console.log(userInput);
  console.log(inputValidation);
  return new Promise((resolve, reject) => {
    if (ok) {
      resolve(console.log("success!"));
    } else reject(alert(message));
  });
};
