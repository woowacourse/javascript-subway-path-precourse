function init() {
  let inputArea = document.getElementById("input-area");
  inputArea.innerHTML = "";
  
  let title = document.createElement("h1");
  let departure = document.createElement("input");
  let arrival = document.createElement("input");
  let shortestPath = document.createElement("input");
  let shortestTime = document.createElement("input");
  let btn = document.createElement("button")
  
  title.innerHTML = "🚇 지하철 길찾기";
  departure.type = "text";
  departure.id="departure-station-name-input";
  arrival.type = "text";
  arrival.id = "arrival-station-name-input";
  shortestPath.type = "radio";
  shortestPath.name = "search-type";
  shortestPath.value = "최단거리";
  shortestPath.checked = "checked";
  shortestTime.type = "radio";
  shortestTime.name = "search-type";
  shortestTime.value = "최소시간";
  btn.onclick = function(){
    const departure = document.getElementById("departure-station-name-input").value;
    const arrival = document.getElementById("arrival-station-name-input").value;
    const radioInput = document.getElementsByName("search-type");
    let radioInputValue = ""
    for (let i=0; i<radioInput.length; i++) {
      if ( radioInput[i].checked === true ) {
        radioInputValue = radioInput[i].value;
      }
    }
    console.log(departure, arrival, radioInputValue)
  }
  btn.type = "submit"
  btn.id = "search-button";
  btn.innerHTML = "길 찾기"

  inputArea.append(title)
  inputArea.append('출발역   ', departure, document.createElement("br"))
  inputArea.append('도착역   ', arrival, document.createElement("br"))
  inputArea.append(shortestPath, "최단거리")
  inputArea.append(shortestTime, "최소시간", document.createElement("br"))
  inputArea.append(btn)
  
}

init()