export default function SubwayPath() {
  // const app = document.getElementById('app');

  const departStation = document.getElementById('departure-station-name-input');
  const arriveStation = document.getElementById('arrival-station-name-input');
  const submitBtn = document.getElementById('search-button');

  submitBtn.addEventListener('click', () => {
    console.log(departStation.value);
    console.log(arriveStation.value);
    const searchType = document.querySelector('input[name="search-type"]:checked').value;
    console.log(searchType);
  });
}

new SubwayPath();
