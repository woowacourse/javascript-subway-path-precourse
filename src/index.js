export default function Search() {
  const getDepartureStationName = () => {
    const departureStationName = document.querySelector("#departure-station-name-input");
    departureStationName.addEventListener("change", () => {
      console.log(departureStationName.value);
    })
  }

  const init = () => {
    getDepartureStationName();
  }

  init();
}

new Search();