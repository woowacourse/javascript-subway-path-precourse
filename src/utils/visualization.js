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

  this.getTableHavingTableHead = (...texts) => {
    const table = document.createElement("table");
    const thead = this.getTableHeadByTexts(...texts);
    this.appendChildren(table, thead);
    return table;
  };

  this.createTd = (text) =>
    text ? this.getAdvancedEle("td", null, text) : document.createElement("td");

  this.createTable = (formattedPath, minDistance, minTime) => {
    const table = this.getTableHavingTableHead("총 거리", "총 소요 시간");
    const distanceAndTimeTr = document.createElement("tr");
    const distanceTd = this.createTd(`${minDistance}km`);
    const timeTd = this.createTd(`${minTime}분`);
    const pathTr = document.createElement("tr");
    const pathTd = this.createTd(formattedPath);
    this.appendRecursiveChild(
      table,
      [distanceAndTimeTr, distanceTd, timeTd],
      [pathTr, pathTd]
    );
    return table;
  };
};
