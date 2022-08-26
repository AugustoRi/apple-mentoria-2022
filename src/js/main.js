import { data } from "../services/database/students";

const pairs = [];

const removeDuplicatesInArray = (arr) => {
  return arr.filter((value, index) => arr.indexOf(value) == index);
};

const getAllStudents = () => {
  let studentsNotFiltered = Object.values(data).flat().flat();
  return removeDuplicatesInArray(studentsNotFiltered);
};

const getAllArrays = () => {
  return Object.values(data).flat();
};

const setInvalidPairs = (all, selected) => {
  return all.filter((teams) => {
    return teams.includes(selected)
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

const prioritySequenceTopToDown = (arr, allArrays) => {
  return arr.sort((current, next) => {
    const invalidPairsCurrent = setInvalidPairs(allArrays, current);
    const invalidPairsNext =  setInvalidPairs(allArrays, next);
  
    if (invalidPairsCurrent.length < invalidPairsNext.length) {
      return 1;
    }
    if (invalidPairsCurrent.length > invalidPairsNext.length) {
      return -1;
    };
    return 0;
  });
};


const setPairs = (all, selected, allArrays) => {
  const invalidPairs = setInvalidPairs(allArrays, selected);
  const validPairs = setValidPairs(all, selected, invalidPairs);
  const pair = validPairs[setRandomNumber(0, validPairs.length)];
  pairs.push([selected, pair]);

  const newAll = all.filter((student) => {
    return student !== selected && student !== pair;
  });
  const newAllArrays = allArrays.map((arr) => {
    if (arr.includes(selected)) {
      return arr.filter((newArray) => newArray !== selected);
    }
    else if (arr.includes(pair)) {
      return arr.filter((newArray) => newArray !== pair);
    }
    return arr;
  });
  const newAllPrioritySequence = prioritySequenceTopToDown(newAll, newAllArrays);
  const newSelected = newAllPrioritySequence[0];

  if (newAll.length >= 2) {
    setPairs(newAll, newSelected, newAllArrays);
  };
  if (newAll.length === 1) {
    return pairs.push(newAll)
  };
};

const allStudents = getAllStudents();
const allArrays = getAllArrays();
const studentsPrioritySequence = prioritySequenceTopToDown(allStudents, allArrays);
console.log(studentsPrioritySequence);

setPairs(allStudents, studentsPrioritySequence[0], allArrays);
console.log(pairs)