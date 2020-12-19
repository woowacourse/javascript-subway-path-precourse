const printResult = (line, departureStationIndex, arrivalStationIndex, distance, time) => {
  const table = document.querySelector("#table");
  table.style.display = 'block';
  table.innerHTML += `<tr><tb>${distance}</tb></tr><tr><tb>${time}</tb></tr>`;
}

export { printResult }