const getDepartureStation = () => {
  return document.getElementById("departure-station-name-input").value;
};

const getArrivalStation = () => {
  return document.getElementById("arrival-station-name-input").value;
};

const getSearchType = () => {
  const searchTypes = document.getElementsByClassName("search-type-input");

  return [...searchTypes].find((x) => x.checked === true).value;
};

const getPathFinderInput = () => {
  return [getDepartureStation(), getArrivalStation(), getSearchType()];
};

export { getPathFinderInput };
