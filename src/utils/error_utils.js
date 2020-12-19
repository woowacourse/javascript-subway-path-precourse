import CommonUtils from '../view/common_utils.js';
import { commonConsts, inputConsts } from '../utils/consts.js';
import CommonView from '../view/common_view.js';
import { line2호선, line3호선, line신분당선 } from '../model/stations.js';

export default class ErrorUtils {
  setVariables() {
    this._commonUtils = new CommonUtils();
    this._commonView = new CommonView();
    this.departureInput = this._commonUtils.getById(
      inputConsts.DEPARTURE_INPUT_IDNAME
    ).value;
    this.arrivalInput = this._commonUtils.getById(
      inputConsts.ARRIVAL_INPUT_IDNAME
    ).value;
  }

  inputErrorExists() {
    this.setVariables();

    if (
      this.doesNotExist(this.departureInput) +
      this.doesNotExist(this.arrivalInput)
    ) {
      return commonConsts.IS_TRUE;
    }

    if (this.sameDepartureArrival()) {
      return commonConsts.IS_TRUE;
    }

    if (this.notConnected(this.departureInput, this.arrivalInput)) {
      return commonConsts.IS_TRUE;
    }

    return commonConsts.IS_FALSE;
  }

  alertCorrespondingError() {
    if (this.doesNotExist(this.departureInput)) {
      this._commonView.alertError(
        inputConsts.DEPARTURE_DOES_NOT_EXIST_ERROR_MESSAGE
      );
    }

    if (this.doesNotExist(this.arrivalInput)) {
      this._commonView.alertError(
        inputConsts.ARRIVAL_DOES_NOT_EXIST_ERROR_MESSAGE
      );
    }

    if (this.sameDepartureArrival()) {
      this._commonView.alertError(
        inputConsts.SAME_DEPARTURE_ARRIVAL_ERROR_MESSAGE
      );
    }

    if (this.notConnected(this.departureInput, this.arrivalInput)) {
      this._commonView.alertError(inputConsts.NOT_CONNECTED_ERROR_MESSAGE);
    }
  }

  doesNotExist(input) {
    if (line2호선.findIndex((station) => station.name === input) >= 0) {
      return commonConsts.IS_FALSE;
    }

    if (line3호선.findIndex((station) => station.name === input) >= 0) {
      return commonConsts.IS_FALSE;
    }

    if (line신분당선.findIndex((station) => station.name === input) >= 0) {
      return commonConsts.IS_FALSE;
    }

    return commonConsts.IS_TRUE;
  }

  sameDepartureArrival() {
    if (this.departureInput === this.arrivalInput) {
      return commonConsts.IS_TRUE;
    }

    return commonConsts.IS_FALSE;
  }

  notConnected(departure, arrival) {
    if (
      this.notSameLine(line2호선, departure, arrival) &&
      this.notSameLine(line3호선, departure, arrival) &&
      this.notSameLine(line신분당선, departure, arrival)
    ) {
      return this.cannotTransfer();
    }

    return commonConsts.IS_FALSE;
  }

  notSameLine(line, departure, arrival) {
    if (
      line.findIndex((station) => station.name === departure) >= 0 &&
      line.findIndex((station) => station.name === arrival) >= 0
    ) {
      return commonConsts.IS_FALSE;
    }

    return commonConsts.IS_TRUE;
  }

  cannotTransfer() {
    const lineList = [line2호선, line3호선, line신분당선];
    const departureLineList = this.findWhereDepartureIs(lineList);
    const arrivalLineIndex = this.findWhereArrivalIs(
      lineList,
      departureLineList
    );
    const arrivalLine = lineList[arrivalLineIndex];
    const transfer = this.countTransfer(departureLineList, arrivalLine);

    if (transfer === 0) {
      return commonConsts.IS_TRUE;
    }

    return commonConsts.IS_FALSE;
  }

  countTransfer(departureLineList, arrivalLine) {
    let transfer = 0;

    departureLineList.forEach((line) => {
      transfer += this.overlapWithArrivalLine(line, arrivalLine);
    });

    return transfer;
  }

  overlapWithArrivalLine(line, arrivalLine) {
    let overlap = 0;

    line.forEach((station) => {
      overlap += this.arrivalLineStationExists(arrivalLine, station);
    });

    return overlap;
  }

  arrivalLineStationExists(arrivalLine, station) {
    let exists = 0;

    arrivalLine.forEach((transfer) => {
      if (station.name === transfer.name) {
        exists += 1;
      }
    });

    return exists;
  }

  findWhereDepartureIs(lineList) {
    let departureLineList = [];

    lineList.forEach((line) => {
      if (
        line.findIndex((station) => station.name === this.departureInput) >= 0
      ) {
        departureLineList.push(line);
      }
    });

    return departureLineList;
  }

  findWhereArrivalIs(lineList, departureLineList) {
    return lineList.findIndex((line) => departureLineList.indexOf(line) === -1);
  }

  checkIfTransferStationExists() {}
}
