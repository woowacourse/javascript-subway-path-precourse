const showElement = $element => {
  $element.classList.add("active");
};

const hideElement = $element => {
  $element.classList.remove("active");
};

const showAlertMessage = ($input, message) => {
  alert(message);
  $input.value = "";
  $input.focus();
};

export { showElement, hideElement, showAlertMessage };
