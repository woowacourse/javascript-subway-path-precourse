export const isEmptyValue = value => !value;

export const isValidInputLength = (value, limit) => value.length >= limit;

export const isExistStation = (nameList, name) => nameList.includes(name);
