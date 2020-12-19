class SubwayHandler {
  handleSearchButton(subway, subwayView) {
    const startStation = subwayView.$startInput.value.trim();
    const endStation = subwayView.$endInput.value.trim();
    let searchType;

    if (subwayView.$radio[0].checked) searchType = subwayView.$radio[0].value;
    if (subwayView.$radio[1].checked) searchType = subwayView.$radio[1].value;

    const searchResult = subway.search(startStation, endStation, searchType);

    if (searchResult) {
      const total = subway.getTotalDistanceAndTime(searchResult);

      subwayView.renderResult(searchType, searchResult, total);
    }
  }
}

const subwayHandler = new SubwayHandler();

export const {handleSearchButton} = subwayHandler;
