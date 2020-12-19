export default class StationPathController {
  constructor () {

  }

  eventHandler() {
    document.addEventListener('click', (event) => {
      const id = event.target.id;
      if (id === 'search-button') {
        console.log("search-button clicked")
      }
    })
  }
}