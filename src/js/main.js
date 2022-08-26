import { data } from "../services/database/students";

const removeDuplicatesInArray = (arr) => {
  return arr.filter((value, index) => arr.indexOf(value) == index);
};

const getAllStudents = () => {
  let studentsNotFiltered = Object.values(data).flat().flat();
  return removeDuplicatesInArray(studentsNotFiltered);
};

const setInvalidPairs = (all, selected) => {
  return all.filter((teams) => {
    return teams.includes(selected);
  })
  .flat()
  .filter((student) => {
    return !student.includes(selected);
  });
};

const setValidPairs = (all, selected, invalidPairsForTheStudentSelected) => {
  return all.filter((student) => {
    return !invalidPairsForTheStudentSelected.includes(student) && student !== selected;
  });
};

const allStudents = getAllStudents();

allStudents.forEach((student) => {
  const cycles = Object.values(data);
  const invalidPairs = cycles.map((cycle) => {
    return setInvalidPairs(cycle, student);
  })
  .flat()

  const validPairs = setValidPairs(allStudents, student, invalidPairs);
  console.log(validPairs)
});
