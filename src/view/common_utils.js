export default class CommonUtils {
  setAttribute(tag, attribute, attributeName) {
    tag.setAttribute(attribute, attributeName);
  }

  appendToIdName(child, parentIdName) {
    const parent = this.getById(parentIdName);

    parent.appendChild(child);
  }

  appendToVarName(child, parent) {
    parent.appendChild(child);
  }

  getById(idName) {
    return document.getElementById(idName);
  }

  setMargin(tag, margin) {
    tag.style.margin = margin;
  }

  emptyInput(input) {
    input.value = "";
  }

  emptyInnerHTML(tag) {
    tag.innerHTML = "";
  }
}
