import { ID_VALUES } from "../html-constant/html-id-values.js";
import { SEARCH_TYPE } from "../html-constant/html-name-value.js";

export const getChildById = (parent, id) => {
  const childrenList = parent.children;
  for (let i = 0; i < childrenList.length; i++) {
    if (childrenList[i].id === id) {
      return childrenList[i];
    }
  }

  return null;
};

export const getDepartureStationNameInputValue = (appContainer) => {
  const $departureStationNameLabel = appContainer.getElementsByTagName(
    "label"
  )[0];

  return getChildById(
    $departureStationNameLabel,
    ID_VALUES.departureStationNameInput
  ).value.trim();
};

export const getArrivalStationNameInputValue = (appContainer) => {
  const $arrivalStationNameLabel = appContainer.getElementsByTagName(
    "label"
  )[1];

  return getChildById(
    $arrivalStationNameLabel,
    ID_VALUES.arrivalStationNameInput
  ).value.trim();
};

export const getSearchType = () => {
  const searchTypes = document.getElementsByName(SEARCH_TYPE);
  for (let i = 0; i < searchTypes.length; i++) {
    if (searchTypes[i].checked) {
      return searchTypes[i].value;
    }
  }
};
