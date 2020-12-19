import { isValidStationName } from "../utils/utils";
import { setLocalStorage, getLocalStorage } from "../utils/LocalStorage";

export default function stationContainer() {
  const stationContainer = document.querySelector("#station-manager-container");
  const stationButton = document.querySelector("#station-name-button");
  const stationInput = document.querySelector("#station-name-input");
  let stationList = [];

  const addStation = inputValue => {
    stationList.push(inputValue);
    setLocalStorage(stationList, "stationList");
    stationInput.value = "";
    stationListTemplate(stationList);
  };

  const init = () => {
    stationContainer.style.display = "block";
    stationListTemplate(stationList);
    stationButton.addEventListener(
      "click",
      () => {
        isValidStationName(stationList, stationInput.value)
          ? addStation(stationInput.value)
          : alert("no");
      },
      true,
    );
  };

  stationList = getLocalStorage("stationList");
  init();
}
