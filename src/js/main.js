import { allStudents, allTeams } from "../services/database/students";
import { setInvalidPairs, setValidPairs } from "./setStatusPairs";
import { prioritySequenceTopToDown, firstStudent } from "./prioritySequence";
const pairs = [];

const setRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + (min));
};

const setPairs = (allStudents, selected, allTeams) => {
  const invalidPairs = setInvalidPairs(allTeams, selected);
  const validPairs = setValidPairs(allStudents, selected, invalidPairs);
  const pair = validPairs[setRandomNumber(0, validPairs.length)];
  pairs.push([selected, pair]);

  const newAll = allStudents.filter((student) => {
    return student !== selected && student !== pair;
  });
  const newAllTeams = allTeams.map((team) => {
    if (team.includes(selected)) {
      return team.filter((newArray) => newArray !== selected);
    }
    else if (team.includes(pair)) {
      return team.filter((newArray) => newArray !== pair);
    }
    return team;
  });
  const newAllPrioritySequence = prioritySequenceTopToDown(newAll, newAllTeams);
  const newSelected = newAllPrioritySequence[0];

  if (newAll.length >= 2) {
    setPairs(newAll, newSelected, newAllTeams);
  };
  if (newAll.length === 1) {
    return pairs.push(newAll);
  };
};

const generatePairs = document.querySelector("#generate-pairs");

generatePairs.addEventListener("click", () => {
  setPairs(allStudents, firstStudent, allTeams);
  
  pairs.length > 0 && pairs.forEach((pair, index) => {
    document.body.textContent += `\n\t${index + 1}° pair = ${pair}`;
  })
});

console.log(pairs)