export function removeWhiteSpaceValue(value) {
    return value.replace(/^\s+|\s+$/gm, '');
}

export function isEmpty(value) {
    return (value === "" || value === null || value === undefined || (value !== null 
        && typeof value === "object" && !Object.keys(value).length));
}

export function isRightLength(value) {
    return value.length >= 2;
}