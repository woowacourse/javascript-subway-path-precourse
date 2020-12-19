import { ID_VALUES } from "../html-constant/html-id-values.js";

export const getChildById = (parent, id) => {
  const childrenList = parent.children;
  for (let i = 0; i < childrenList.length; i++) {
    if (childrenList[i].id === id) {
      return childrenList[i];
    }
  }

  return null;
};

export const getDepartureStationNameInput = (appContainer) => {
  const $departureStationNameLabel = appContainer.getElementsByTagName(
    "label"
  )[0];

  return getChildById(
    $departureStationNameLabel,
    ID_VALUES.departureStationNameInput
  );
};

export const getArrivalStationNameInput = (appContainer) => {
  const $arrivalStationNameLabel = appContainer.getElementsByTagName(
    "label"
  )[1];

  return getChildById(
    $arrivalStationNameLabel,
    ID_VALUES.arrivalStationNameInput
  );
};
