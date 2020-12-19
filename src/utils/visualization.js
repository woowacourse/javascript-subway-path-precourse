import {
  RESULT_DIV_ID,
  STRING_TO_CLREA_RESULT_DIV,
  TABLE,
  TABLE_TITLE1,
  TABLE_TITLE2,
  TD,
  TH,
  THEAD,
  TR,
  DISTANCE_MEASUREMENT,
  TIME_MEASUREMENT,
  RESULT_TITLE_TAG,
  RESULT_SUBTITLE_TAG,
  RESULT_TITLE_TEXT,
  RESULT_SUBTITLE_TEXT,
  PATH_TD_ID,
} from "../../constant.js";

const Visualization = function () {
  this.setAttributes = (tag, attributes) => {
    for (let i in attributes) {
      tag.setAttribute(i, attributes[i]);
    }
  };

  this.appendChildren = (parentElement, ...ChildElements) => {
    for (let i = 0; i < ChildElements.length; i++) {
      parentElement.appendChild(ChildElements[i]);
    }
  };

  this.getAdvancedEle = (typeOfTag, attributes, AnInsertedText) => {
    const result = document.createElement(typeOfTag);
    if (AnInsertedText) {
      const innerText = document.createTextNode(AnInsertedText);
      this.appendChildren(result, innerText);
    }
    if (attributes) this.setAttributes(result, attributes);
    return result;
  };

  this.appendRecursiveChild = (parent, ...children) => {
    for (let i = 0; i < children.length; i++) {
      if (Array.isArray(children[i]))
        children[i] = this.appendRecursiveChild(...children[i]);
    }
    this.appendChildren(parent, ...children);
    return parent;
  };

  this.clearResultDiv = () =>
    (document.getElementById(
      RESULT_DIV_ID
    ).innerHTML = STRING_TO_CLREA_RESULT_DIV);

  this.getTableHeadByTexts = (...texts) => {
    const thead = document.createElement(THEAD);
    const tr = document.createElement(TR);
    texts.forEach((text) => {
      const th = this.getAdvancedEle(TH, null, text);
      this.appendChildren(tr, th);
    });
    this.appendChildren(thead, tr);
    return thead;
  };

  this.getTableHavingTableHead = (...texts) => {
    const table = document.createElement(TABLE);
    const thead = this.getTableHeadByTexts(...texts);
    this.appendChildren(table, thead);
    return table;
  };

  this.createTd = (text) =>
    text ? this.getAdvancedEle(TD, null, text) : document.createElement(TD);

  this.createTable = (formattedPath, minDistance, minTime) => {
    const table = this.getTableHavingTableHead(TABLE_TITLE1, TABLE_TITLE2);
    const distanceAndTimeTr = document.createElement("tr");
    const distanceTd = this.createTd(`${minDistance}${DISTANCE_MEASUREMENT}`);
    const timeTd = this.createTd(`${minTime}${TIME_MEASUREMENT}`);
    const pathTr = this.getAdvancedEle(TR, { id: PATH_TD_ID }, formattedPath);
    this.appendRecursiveChild(
      table,
      [distanceAndTimeTr, distanceTd, timeTd],
      pathTr
    );
    return table;
  };

  this.renderResult = (formattedPath, minDistance, minTime) => {
    const resultDiv = document.getElementById(RESULT_DIV_ID);
    const resultTitle = this.getAdvancedEle(
      RESULT_TITLE_TAG,
      null,
      RESULT_TITLE_TEXT
    );
    const resultSubTitle = this.getAdvancedEle(
      RESULT_SUBTITLE_TAG,
      null,
      RESULT_SUBTITLE_TEXT
    );
    const table = this.createTable(formattedPath, minDistance, minTime);
    this.appendChildren(resultDiv, resultTitle, resultSubTitle, table);
  };
};

export const { renderResult, clearResultDiv } = new Visualization();
