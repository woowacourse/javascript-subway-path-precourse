import { LIMIT } from "./constants.js";
export const isValidateName = (name) => {
  if (name.trim().length < LIMIT.NAME_LIMIT) {
    return false;
  }
  return true;
};
