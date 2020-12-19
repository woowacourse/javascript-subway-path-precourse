const parser = new DOMParser();

export function makeStringToHTML(string) {
  return parser.parseFromString(string, "text/html").body;
}

export function clearElement(element) {
  if (element) {
    element.innerHTML = "";
  }
}
