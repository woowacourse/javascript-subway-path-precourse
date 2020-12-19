export function makeElement({
  tag = "div",
  border,
  classList,
  innerHTML,
  id,
  dataset,
}) {
  const newElement = document.createElement(tag);
  if (border) newElement.border = border;
  if (innerHTML) newElement.innerHTML = innerHTML;
  if (classList) newElement.classList.add(...classList);
  if (id) newElement.id = id;
  if (dataset) newElement.setAttribute(`data-${dataset[0]}`, dataset[1]);
  return newElement;
}
