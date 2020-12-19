const printResult = (line, departureStationIndex, arrivalStationIndex, distance, time) => {
  const table = document.querySelector("#table");
  table.style.display = 'block';
  table.innerHTML += `<tr>${distance}</tr><tr>${time}</tr>`;
}

export { printResult }