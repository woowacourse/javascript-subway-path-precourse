import { LineModel } from "../model/Line.js";
import { Constant, ErrorMessage } from "./constant.js";

export const StationValidation = {
  isNotSameDepartureArrival(departure, arrival) {
    if (departure === arrival) {
      alert(ErrorMessage.SAME_DAPARTURE_ARRIVAL);

      return;
    }

    return true;
  },

  isValidDepartureStation(station) {
    // if (!this.isThereStation(station)) {
    //   return;
    // }

    return this.hasValidName(station) && this.isThereStation(station);
  },

  isValidArrivalStation(station) {
    return this.hasValidName(station) && this.isThereStation(station);
  },

  hasValidName(name) {
    if (!this.hasOnlyKoreanAlphabet(name)) {
      alert(ErrorMessage.ONLY_KOREAN_ALPHABET);

      return;
    }

    if (!this.hasMinimumLength(name)) {
      alert(ErrorMessage.MINIMUM_NAME_LENGTH);

      return;
    }

    return true;
  },

  hasOnlyKoreanAlphabet(name) {
    return Constant.REGEX_CATCHING_KOREAN_ALPHABET.test(name);
  },

  hasMinimumLength(name) {
    return name.length >= Constant.MINIMUM_NAME_LENGTH;
  },

  isThereStation(name) {
    if (!LineModel.listAllStationsSet().has(name)) {
      alert(ErrorMessage.STATION_IS_NOT_THERE);

      return;
    }

    return true;
  },
};
