export const clearInput = $input => {
  $input.value = ``;
  $input.focus();
};

export const alertMessage = ($input, message) => {
  alert(message);
  clearInput($input);
};
