import { isValidLength, isValidStation } from "../check.js";

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
      if (isValidLength(departureStationName.value) && isValidStation(departureStationName.value)) {
        console.log(departureStationName.value)
      }
      else {
        const ALERT_MESSAGE = "노선에 존재하는 2글자 이상의 역 이름을 입력해 주세요.";
        alert(ALERT_MESSAGE);
      }
    })
  }

  const init = () => {
    getDepartureStationName();
    getArrivalStationName();
  }

  init();
}

new Search();