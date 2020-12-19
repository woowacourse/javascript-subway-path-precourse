import stationContainer from "./station/stationContainer";
import lineContainer from "./line/lineContainer";
import sectionContainer from "./section/sectionContainer";

const init = () => {
  const stationButton = document.querySelector("#station-manage");
  const lineButton = document.querySelector("#line-manage");
  const sectionButton = document.querySelector("#section-manage");

  stationButton.addEventListener("click", () => {
    clearScreen();
    stationContainer();
  });

  lineButton.addEventListener("click", () => {
    clearScreen();
    lineContainer();
  });

  sectionButton.addEventListener("click", () => {
    clearScreen();
    sectionContainer();
  });

  const clearScreen = () => {
    const stationManageContainer = document.querySelector(
      "#station-manager-container",
    );
    const lineManageContainer = document.querySelector(
      "#line-manager-container",
    );
    const sectionManageContainer = document.querySelector(
      "#section-manager-container",
    );

    stationManageContainer.style.display = "none";
    lineManageContainer.style.display = "none";
    sectionManageContainer.style.display = "none";
  };
};

init();
