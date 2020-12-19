import searchPresenter from "./searchPresenter.js";

const findSelectRadio = () => {
  const searchTypes = document.getElementsByName("search-type");

  let searchType;
  for (let i = 0; i < searchTypes.length; i++) {
    if (searchTypes[i].checked) {
      searchType = searchTypes[i].value;
    }
  }

  return searchType;
};

const getStations = () => {
  const departureStation = document.getElementById(
    "departure-station-name-input"
  ).value;
  const arrivalStation = document.getElementById("arrival-station-name-input")
    .value;

  return { departureStation, arrivalStation };
};

const searchContainer = (lineData) => {
  const searchType = findSelectRadio();

  const { departureStation, arrivalStation } = getStations();
  console.log(departureStation, arrivalStation);

  searchPresenter(searchType);
};

export default searchContainer;
