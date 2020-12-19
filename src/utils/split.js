export const splitSection = (section) => {
  const lines = [];
  for (const line in section) {
    const sections = section[line].split(' - ').filter((v, i) => i % 2 === 0);
    const remain = section[line].split(' - ').filter((v, i) => i % 2 === 1);
    const distance = splitTimeOrDistance(remain, 'k');
    const time = splitTimeOrDistance(remain, '분');
    lines.push({
      names: sections,
      distance,
      time,
    });
  }

  return lines;
};

const splitTimeOrDistance = (timeOrDistance, string) => {
  const splitedResult = timeOrDistance.map((v) => {
    const findIndex = v.indexOf(string);
    if (string === 'k') {
      return parseInt(v.slice(2, findIndex));
    }
    return parseInt(v.slice(8, findIndex));
  });

  return splitedResult;
};
