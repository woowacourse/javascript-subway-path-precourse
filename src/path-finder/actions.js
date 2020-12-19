import { lines } from "./datas.js";
import Dijkstra from "../utils/Dijkstra.js";
import { isNull, isUnderTwo, isUndefind, isEqual } from "../utils/valid.js";

const distanceDijkstra = new Dijkstra();
const timeDijkstra = new Dijkstra();

const setDijkstra = (_line) => {
  let nextStation = _line.sections[0];
  let prevStation = null;
  let section = { distance: "", time: "" };

  for (let i = 1; i < _line.sections.length; i++) {
    if (typeof _line.sections[i] === "string") {
      prevStation = nextStation;
      nextStation = _line.sections[i];

      distanceDijkstra.addEdge(prevStation, nextStation, section.distance);
      timeDijkstra.addEdge(prevStation, nextStation, section.time);
    } else {
      section = _line.sections[i];
    }
  }
};

const isValid = (_departureStation, _arrivalStation) => {
  if (isNull(_departureStation) || isNull(_arrivalStation)) {
    alert("역 이름을 입력해주세요.");
    return;
  } else if (isUnderTwo(_departureStation) || isUnderTwo(_arrivalStation)) {
    alert("역 이름은 두 글자 이상입니다.");
    return;
  } else if (isUndefind(_departureStation) || isUndefind(_arrivalStation)) {
    alert("조회하신 역은 없는 역입니다.");
    return;
  } else if (isEqual(_departureStation, _arrivalStation)) {
    alert("출발역과 도착역은 같을 수 없습니다.");
    return;
  }

  return true;
};

const getDepartureStation = () => {
  return document.getElementById("departure-station-name-input").value;
};

const getArrivalStation = () => {
  return document.getElementById("arrival-station-name-input").value;
};

const getSearchType = () => {
  const searchTypes = document.getElementsByClassName("search-type-input");

  return [...searchTypes].find((x) => x.checked === true).value;
};

const getPathFinderInput = () => {
  const departureStation = getDepartureStation();
  const arrivalStation = getArrivalStation();

  if (isValid(departureStation, arrivalStation)) {
    return [getDepartureStation(), getArrivalStation(), getSearchType()];
  }
};

const findPath = (_departureStation, _arrivalStation, _searchType) => {
  if (_searchType === "최단거리") {
    return distanceDijkstra.findShortestPath(
      _departureStation,
      _arrivalStation
    );
  } else {
    return timeDijkstra.findShortestPath(_departureStation, _arrivalStation);
  }
};

const isInLine = (_line, _prevStation, _nextStation) => {
  return (
    _line.sections.indexOf(_prevStation) !== -1 &&
    _line.sections.indexOf(_nextStation) !== -1
  );
};

const getNowLineSections = (_prevStation, _nextStation) => {
  return lines.find((x) => isInLine(x, _prevStation, _nextStation)).sections;
};

const getNowSection = (_nowLineSections, _prevStation, _nextStation) => {
  return _nowLineSections[
    (_nowLineSections.indexOf(_nextStation) +
      _nowLineSections.indexOf(_prevStation)) /
      2
  ];
};

const getDistanceAndTime = (_path) => {
  let nextStation = _path[0];
  let prevStation = null;
  let section = { distance: 0, time: 0 };

  for (let i = 1; i < _path.length; i++) {
    prevStation = nextStation;
    nextStation = _path[i];

    const nowLineSections = getNowLineSections(prevStation, nextStation);
    const nowSection = getNowSection(nowLineSections, prevStation, nextStation);

    section.distance += nowSection.distance;
    section.time += nowSection.time;
  }

  return section;
};

const init = () => {
  const pathFinderInput = getPathFinderInput();

  if (pathFinderInput) {
    lines.forEach((x) => setDijkstra(x));

    const path = findPath(...pathFinderInput);
    const section = getDistanceAndTime(path);
    const searchType = pathFinderInput[2];

    return [searchType, section.distance, section.time, path];
  }
};

export { init };
