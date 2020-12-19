export const isInputValid = ($departureName, $arrivalName, stations) => {
  if (!isIncluded($departureName, stations)) {
    return false;
  }
  if (!isIncluded($arrivalName, stations)) {
    return false;
  }
  if (!isBothDifferent($arrivalName, $arrivalName)) {
    return false;
  }

  return true;
};

const isIncluded = ($name, stations) => {
  if (!stations.includes($name)) {
    return alert('존재하지 않는 역입니다.');
  }

  return true;
};

const isBothDifferent = (first, second) => {
  if (first === second) {
    return alert('동일한 역을 입력하셨습니다.');
  }

  return true;
};
