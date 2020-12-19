export const appendNew = (tag, parent, text, id, key, value) => {
  const element = document.createElement(tag);

  if (parent) parent.append(element);
  if (text) element.innerHTML = text;
  if (id) element.id = id;
  if (key && value) element.setAttribute(`data-${key}`, value);
  return element;
};

export const appendNewRadioButton = (parent, labelText, id, name) => {
  let radioButton;

  appendNew('label', parent, labelText);
  radioButton = appendNew('input', parent, '', id);
  radioButton.setAttribute('type', 'radio');
  radioButton.setAttribute('name', name);
  return radioButton;
};
