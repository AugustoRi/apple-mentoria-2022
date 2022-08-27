import { allStudents, allArrays } from "../services/database/students";
import { setInvalidPairs } from "./setStatusPairs";

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

const studentsPrioritySequence = prioritySequenceTopToDown(allStudents, allArrays);
const firstStudent = studentsPrioritySequence[0];

export { prioritySequenceTopToDown, firstStudent };