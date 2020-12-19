export const appendNew = (tag, parent, text, id, className, key, value) => {
  const element = document.createElement(tag);

  if (parent) parent.append(element);
  if (text) element.innerHTML = text;
  if (id) element.id = id;
  if (className) element.className = className;
  if (key && value) element.setAttribute(`data-${key}`, value);
  return element;
};
