function onSearchBtnHandler() {
  let subwayDatas = JSON.parse(localStorage.getItem("subwayDatas"));
  let departure = console.log(document.getElementById("departure-station-name-input").value);
  let end = console.log(document.getElementById("arrival-station-name-input").value);

  let checkedRadioInput = checkRadioInput();
  console.log(checkedRadioInput);
}

function checkRadioInput() {
  let checkedRadioInput = "";

  if (document.all("search-type")[0].checked) {
    checkedRadioInput = "최단거리";
  } else if (document.all("search-type")[1].checked) {
    checkedRadioInput = "최소시간";
  }

  return checkedRadioInput;
}

export { onSearchBtnHandler };
