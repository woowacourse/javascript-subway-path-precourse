

export const makeResultHTML = (distance, time, pathResult, selection) => {
    let resultHTML = document.getElementById("result-div");

    resultHTML.innerHTML = makeTitle()
        + makeTableTitle(selection)
        + makeTable(distance, time, pathResult);
}

const makeTitle = () => {
    return `<h3>📝 결과</h3>`
}

const makeTableTitle = (selection) => {
    if (selection === "time") {
        return `<h4>최단거리</h4>`;
    }

    return `<h4>최소시간</h4>`;
}

const makeTable = (distance, time, pathResult) => {
    let tableHTMl = `
                <table>
                    <th>총 거리</th><th>총 소요 시간</th>
                    <tr><td>${distance}km</td><td>${time}분</td></tr>
                    <tr><td>${pathResult}</td></tr>
                </table>`
}

