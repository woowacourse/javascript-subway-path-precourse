import { Constant, ErrorMessage } from "./constant.js";

export const StationValidation = {
  isValidDepartureStation(station) {
    return this.hasValidName(station);
  },

  hasValidName(name) {
    if (!this.hasOnlyKoreanAlphabet(name)) {
      alert(ErrorMessage.ONLY_KOREAN_ALPHABET);

      return;
    }

    if (!this.hasMinimumLength(name)) {
      alert(ErrorMessage.MINIMUM_LENGTH);

      return;
    }

    return;
  },

  hasOnlyKoreanAlphabet(name) {
    return Constant.REGEX_CATCHING_KOREAN_ALPHABET.test(name);
  },

  hasMinimumLength(name) {
    return name.length >= Constant.MINIMUM_NAME_LENGTH;
  },
};
