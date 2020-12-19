import {
  MIN_DISTANCE_CHECK_OPTION_NAME,
  MIN_TIME_CHECK_OPTION_NAME,
  TOO_SHORT_STATION_NAME_MESSAGE,
  NOT_CONNECTED_STATIONS_MESSAGE,
  SAME_STATIONS_MESSAGE,
  STATION_NOT_EXIST_MESSAGE,
} from '../../constants/constants.js';
import {
  resultElement,
  resultTableBodyElement,
  arrivalStationNameInputElement,
  departureStationNameInputElement,
  minDistancePathSearchRadioElement,
  minTimePathSearchRadioElement,
} from '../../elements/subwayPath.js';
import SubwayPath from './subwayPath.js';
import Station from '../station/station.js';
import { subwayMap } from '../../store/subway.js';
import { getResultTableBodyTemplate } from '../../templates/table.js';

export default class SubwayPathUI {
  static getCheckedOptionName() {
    let checkedOptionName = '';
    if (minDistancePathSearchRadioElement.checked === true) {
      checkedOptionName = MIN_DISTANCE_CHECK_OPTION_NAME;
    } else if (minTimePathSearchRadioElement.checked === true) {
      checkedOptionName = MIN_TIME_CHECK_OPTION_NAME;
    }

    return checkedOptionName;
  }

  static getInvalidInputAlertMessage(startStationName, endStationName) {
    let alertMessage = '';
    if (
      Station.isStationNameTooShort(startStationName) ||
      Station.isStationNameTooShort(endStationName)
    ) {
      alertMessage += TOO_SHORT_STATION_NAME_MESSAGE;
    }
    if (Station.isStationNamesSame(startStationName, endStationName)) {
      alertMessage += SAME_STATIONS_MESSAGE;
    }

    return alertMessage;
  }

  static getInvalidSearchAlertMessage(startStationName, endStationName) {
    let alertMessage = '';
    if (
      subwayMap.isStationNotExist(startStationName) ||
      subwayMap.isStationNotExist(endStationName)
    ) {
      alertMessage += STATION_NOT_EXIST_MESSAGE;
    }
    if (subwayMap.isStationsConnected(startStationName, endStationName)) {
      alertMessage += NOT_CONNECTED_STATIONS_MESSAGE;
    }

    return alertMessage;
  }

  static showResultToTable({
    checkedOptionName,
    departureStationName,
    arrivalStationName,
  }) {
    let resultPath;
    if (checkedOptionName === MIN_DISTANCE_CHECK_OPTION_NAME) {
      resultPath = SubwayPath.getMinDistancePath(
        departureStationName,
        arrivalStationName
      );
    } else if (checkedOptionName === MIN_TIME_CHECK_OPTION_NAME) {
      resultPath = SubwayPath.getMinTimePath(
        departureStationName,
        arrivalStationName
      );
    }
    subwayMap.setPath(resultPath);
    const {
      totalDistance,
      totalTime,
    } = subwayMap.getTotalDistanceAndTimeFromPath();
    const resultTableBodyTemplate = getResultTableBodyTemplate(
      totalDistance,
      totalTime,
      resultPath
    );
    resultElement.setAttribute('style', 'display: block;');
    resultTableBodyElement.innerHTML = resultTableBodyTemplate;
  }

  static showPath() {
    const departureStationName = departureStationNameInputElement.value;
    const arrivalStationName = arrivalStationNameInputElement.value;
    const checkedOptionName = SubwayPathUI.getCheckedOptionName();
    const invalidInputAlertMessage = SubwayPathUI.getInvalidInputAlertMessage(
      departureStationName,
      arrivalStationName
    );
    if (invalidInputAlertMessage !== '') {
      alert(invalidInputAlertMessage);
      return;
    }
    const invalidSearchAlertMessage = SubwayPathUI.getInvalidSearchAlertMessage(
      departureStationName,
      arrivalStationName
    );
    if (invalidSearchAlertMessage !== '') {
      alert(invalidSearchAlertMessage);
    } else {
      SubwayPathUI.showResultToTable({
        checkedOptionName,
        departureStationName,
        arrivalStationName,
      });
    }
  }
}
