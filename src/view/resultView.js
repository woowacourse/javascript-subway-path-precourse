

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
    let tableHTML = `
                <table border=1px text-align=>
                    <tr><th>총 거리</th><th>총 소요 시간</th></tr>
                    <tr><td><center>${distance}km</center></td><td><center>${time}분</center></td></tr>
                    <tr><td colspan=2><center>${addArrowTopathResult(pathResult)}</center></td></tr>
                </table>`

    return tableHTML
}

const addArrowTopathResult = (pathResult) => {
    return pathResult.join("➡");
}
