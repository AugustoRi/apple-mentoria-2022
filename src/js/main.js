import { data } from "../services/database/students";

const pairs = [];

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

const setRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + (min));
};

const cycles = Object.values(data);

const setPairs = (all, selected) => {
  const invalidPairs = cycles.map((cycle) => {
    return setInvalidPairs(cycle, selected);
  }).flat();
  const validPairs = setValidPairs(all, selected, invalidPairs);
  const pair = validPairs[setRandomNumber(0, validPairs.length)];
  pairs.push([selected, pair]);

  const newAll = all.filter((student) => {
    return student !== pair && student !== selected;
  });
  const newSelected = newAll[setRandomNumber(0, newAll.length)];

  if (newAll.length >= 2) {
    setPairs(newAll, newSelected);
  };
}

const allStudents = getAllStudents();
const firstStudentSelected = allStudents[setRandomNumber(0, allStudents.length)];
setPairs(allStudents, firstStudentSelected);