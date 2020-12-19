import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";
import {
  lineMenuPresenter,
  sectionManagePresenter,
  lineListTemplate,
} from "./sectionPresenter";

export default function sectionContainer() {
  let lineData = [];
  let stationData = [];

  const addSection = (station, order, line) => {
    const sectionManageContainer = document.querySelector(
      "#section-manage-container",
    );
    const lineListTable = document.querySelector("#line-list-table");
    const prevLineDataIndex = lineData.indexOf(line);

    line.splice(parseInt(order) + 1, 0, station);
    lineData[prevLineDataIndex] = line;
    sectionManageContainer.removeChild(lineListTable);
    setLocalStorage(lineData, "lineList");
    lineListTemplate(line);
    sectionHandler(line);
  };

  const sectionHandler = line => {
    const sectionSelector = document.querySelector("#section-manage-selector");
    const sectionInputNumber = document.querySelector("#section-manage-input");
    const sectionButton = document.querySelector("#section-manage-button");
    sectionButton.addEventListener("click", () => {
      addSection(
        sectionSelector.options[sectionSelector.selectedIndex].value,
        sectionInputNumber.value,
        line,
      );
    });
  };

  const MenuButtonHandler = () => {
    const menuButtons = document.querySelectorAll("#line-menu-button");
    if (menuButtons !== null) {
      for (const menuButton of menuButtons) {
        menuButton.addEventListener("click", event => {
          manageLine(event);
        });
      }
    }
  };

  const manageLine = event => {
    const targetLine = event.target.dataset.linenumber;
    for (const line of lineData) {
      if (line[0] === targetLine) {
        sectionManagePresenter(line, stationData);
        lineListTemplate(line);
        sectionHandler(line);
      }
    }
  };

  const init = () => {
    const sectionContainer = document.querySelector(
      "#section-manager-container",
    );
    lineMenuPresenter(lineData);
    MenuButtonHandler();
    sectionContainer.style.display = "block";
  };

  lineData = getLocalStorage("lineList");
  stationData = getLocalStorage("stationList");
  init();
}
