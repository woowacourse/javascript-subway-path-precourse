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

const searchContainer = () => {
  const searchType = findSelectRadio();
  searchPresenter(searchType);
};

export default searchContainer;
