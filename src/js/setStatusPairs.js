export const setInvalidPairs = (all, selected) => {
  return all.filter((teams) => {
    return teams.includes(selected)
  })
  .flat()
  .filter((student) => {
    return !student.includes(selected);
  });
};

export const setValidPairs = (all, selected, invalidPairsForTheStudentSelected) => {
  return all.filter((student) => {
    return !invalidPairsForTheStudentSelected.includes(student) && student !== selected;
  });
};