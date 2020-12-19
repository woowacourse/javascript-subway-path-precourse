const validateNameLength = (name) => {
  if (name.trim().length < 2) {
    return false;
  }
  return true;
};

const stationNameValidation = (stationName) => {
  if (!validateNameLength(stationName)) {
    return alert("역의 이름은 두 글자 이상이어야 합니다.");
  }
};
