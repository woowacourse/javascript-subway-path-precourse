import { WORDS } from "../constants/index.js";
import { appendChilds, clearChilds } from "../utils/display.js";
import { createHeader, createTable } from "../utils/HTMLElement.js";

// 초기화면 구성
const choiceTypeWord = (searchType) => {
  let type = WORDS.TYPE_DISTANCE_KO;

  if (searchType === WORDS.TYPE_TIME_EN) {
    type = WORDS.TYPE_TIME_KO;
  }

  return type;
};

const displayInitialResult = (searchType) => {
  const type = choiceTypeWord(searchType);
  const resultHeader = createHeader(WORDS.SEARCH_RESULT_TITLE);
  const resultType = createHeader(type, 3);
  const resultTable = createTable(WORDS.LIST_COL_NAME);
  const elements = [resultHeader, resultType, resultTable];

  clearChilds();
  appendChilds(elements);
};

const searchPresenter = (searchType) => {
  displayInitialResult(searchType);
};

export default searchPresenter;
