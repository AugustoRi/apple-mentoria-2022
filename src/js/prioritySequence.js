import { allStudents, allTeams } from "../services/database/students";
import { setInvalidPairs } from "./setStatusPairs";

const prioritySequenceTopToDown = (allStudents, allTeams) => {
  return allStudents.sort((current, next) => {
    const invalidPairsCurrent = setInvalidPairs(allTeams, current);
    const invalidPairsNext =  setInvalidPairs(allTeams, next);
  
    if (invalidPairsCurrent.length < invalidPairsNext.length) {
      return 1;
    }
    if (invalidPairsCurrent.length > invalidPairsNext.length) {
      return -1;
    };
    return 0;
  });
};

const studentsPrioritySequence = prioritySequenceTopToDown(allStudents, allTeams);
const firstStudent = studentsPrioritySequence[0];

export { prioritySequenceTopToDown, firstStudent };