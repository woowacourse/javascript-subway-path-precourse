import { DOMTag, STRING } from "../consts/consts.js";
import { createElement, clearContainer, insertRow } from "../utils/utils.js";

const subTitleText = {
  distance: "최단경로",
  time: "최단시간",
};

const resultContainer = document.querySelector(DOMTag.RESULT_CONTAINER_QUERY);
const resultTitle = createElement({ tagType: "h2", innerText: "결과" });
const resultSubtitle = createElement({
  tagType: "h3",
});
const resultTable = createElement({ tagType: "table" });

export const renderer = (type, dijkstraData) => {
  resultSubtitle.innerText = subTitleText[type];

  clearContainer([resultContainer, resultTable]);
  resultContainer.append(resultTitle, resultSubtitle, resultTable);

  constructTable(resultTable, dijkstraData);
};

const constructTable = (table, [dist, time, path]) => {
  insertRow(table, "heading", [STRING.TOTAL_DIST, STRING.TOTAL_TIME]);
  insertRow(table, "data", [`${dist}km`, `${time}분`]);
  insertRow(table, "path", [path.toString()]);
};
