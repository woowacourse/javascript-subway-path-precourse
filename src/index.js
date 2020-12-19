export default function Search() {  

  const getArrivalStationName = () => {
    const arrivalStationName = document.querySelector("#arrival-station-name-input");
    arrivalStationName.addEventListener("change", () => {
      console.log(arrivalStationName.value);
    })
  }

  const getDepartureStationName = () => {
    const departureStationName = document.querySelector("#departure-station-name-input");
    departureStationName.addEventListener("change", () => {
      console.log(departureStationName.value);
    })
  }

  const init = () => {
    getDepartureStationName();
    getArrivalStationName();
  }

  init();
}

new Search();