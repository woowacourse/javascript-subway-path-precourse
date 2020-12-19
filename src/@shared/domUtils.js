const showElement = $element => {
  $element.classList.add("active");
};

const hideElement = $element => {
  $element.classList.remove("active");
};

export { showElement, hideElement };
