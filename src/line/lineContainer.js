import { setLocalStorage, getLocalStorage } from "../utils/LocalStorage";
import { isValidLineInfo } from "../utils/utils";
import { lineListTemplate, clearOption } from "./linePresenter";

export default function lineContainer() {
  const lineNameContainer = document.querySelector("#line-manager-container");
  const lineNameInput = document.querySelector("#line-name-input");
  const lineStartSelector = document.querySelector("#line-start-name-selector");
  const lineEndSelector = document.querySelector("#line-start-end-selector");
  const lineNameButton = document.querySelector("#line-name-button");

  let lineList = [];

  const checkLineName = (lineName, startLine, endLine) => {
    if (lineName) {
      const lineInfo = [lineName, startLine, endLine];
      isValidLineInfo(lineList, lineInfo) ? addLine(lineInfo) : alert("no");
    }
  };

  const addLine = lineInfo => {
    lineList.push(lineInfo);
    setLocalStorage(lineList, "lineList");
    lineListTemplate(lineList);
    lineNameInput.value = "";
  };

  const setSelectorOption = selector => {
    const stationData = JSON.parse(window.localStorage.getItem("stationList"));
    if (selector === lineStartSelector) {
      clearOption();
    }
    if (stationData) {
      for (const station of stationData) {
        const selectorOption = document.createElement("option");
        selectorOption.setAttribute("id", "station-option");
        selectorOption.textContent = station;
        selector.appendChild(selectorOption);
      }
    }
  };

  const init = () => {
    if (lineList) {
      lineListTemplate(lineList);
    }
    lineNameContainer.style.display = "block";
    lineNameButton.addEventListener("click", () => {
      checkLineName(
        lineNameInput.value,
        lineStartSelector.options[lineStartSelector.selectedIndex].value,
        lineEndSelector.options[lineEndSelector.selectedIndex].value,
      );
    });
  };

  setSelectorOption(lineStartSelector);
  setSelectorOption(lineEndSelector);
  lineList = getLocalStorage("lineList");
  init();
}
