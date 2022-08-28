export const setInvalidPairs = (allTeams, selected) => {
  return allTeams.filter((teams) => {
    return teams.includes(selected)
  })
  .flat()
  .filter((student) => {
    return !student.includes(selected);
  });
};

export const setValidPairs = (allStudents, selected, invalidPairsForTheStudentSelected) => {
  return allStudents.filter((student) => {
    return !invalidPairsForTheStudentSelected.includes(student) && student !== selected;
  });
};