class SubwayHandler {
  handleSearchButton(subway, subwayView) {
    const startStation = subwayView.$startInput.value.trim();
    const endStation = subwayView.$endInput.value.trim();
    const radio = subwayView.$radio;

    subway.search(startStation, endStation, radio);
  }
}

const subwayHandler = new SubwayHandler();

export const {handleSearchButton} = subwayHandler;
