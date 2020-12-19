export const findTotalTimeOrDistance = (result, sectionInf) => {
  let time = 0;
  let distance = 0;
  for (let i = 0; i < result.length - 1; i++) {
    const combinedResult = [result[i], result[i + 1]];
    const sameSection = findSameSection(combinedResult, sectionInf);
    time += sameSection.time;
    distance += sameSection.distance;
  }

  return {time, distance};
};

const findSameSection = (result, section) => {
  const sectionIndex = section.findIndex((v) =>
    v.find((sectionInf) => {
      return (
        sectionInf.section[0] === result[0] &&
        sectionInf.section[1] === result[1]
      );
    }),
  );
  const stationIndex = section[sectionIndex].findIndex(
    (sectionInf) => sectionInf.section[1] === result[1],
  );

  return section[sectionIndex][stationIndex];
};
