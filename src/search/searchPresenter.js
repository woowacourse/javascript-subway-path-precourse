import { SYMBOL, WORDS } from "../constants/index.js";
import { appendChilds, appendTbody, clearChilds } from "../utils/display.js";
import {
  createHeader,
  createTable,
  createTableData,
  createTableRow,
} from "../utils/HTMLElement.js";

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

  return true;
};

// 경로 표시
const displayPath = (path) => {
  const removeLastStringPath = path.map((station) => {
    const editedStation = station.slice(0, -1);

    return editedStation;
  });
  const pathInfo = removeLastStringPath.join(SYMBOL.ARROW_RIGHT);

  const td = createTableData(pathInfo, 2);
  const tr = createTableRow([td]);

  appendTbody(tr);
};

const searchPresenter = (searchType, path) => {
  const isInitialDisplayed = displayInitialResult(searchType);

  if (isInitialDisplayed) {
    displayPath(path);
  }
};

export default searchPresenter;
