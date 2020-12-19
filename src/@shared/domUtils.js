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

const getCheckedSearchType = $inputs => {
  const checkedRadio = [...$inputs].filter(radio => radio.checked)[0];

  return checkedRadio.dataset.searchtype;
};

export { showElement, hideElement, showAlertMessage, getCheckedSearchType };
