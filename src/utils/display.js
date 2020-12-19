export const appendChilds = (elements, targetId = "result") => {
  const target = document.getElementById(targetId);

  elements.forEach((element) => {
    target.appendChild(element);
  });
};

export const clearChilds = (targetId = "result") => {
  const target = document.getElementById(targetId);

  target.innerHTML = "";
};
