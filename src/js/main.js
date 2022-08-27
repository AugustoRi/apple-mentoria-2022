import { allStudents, allArrays } from "../services/database/students";
import { setInvalidPairs, setValidPairs } from "./setStatusPairs";
import { prioritySequenceTopToDown, firstStudent } from "./prioritySequence";
const pairs = [];

const setRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + (min));
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
    return pairs.push(newAll);
  };
};

const generatePairs = document.querySelector("#generate-pairs");

generatePairs.addEventListener("click", () => {
  setPairs(allStudents, firstStudent, allArrays);
  
  pairs.forEach((pair, index) => {
    document.body.textContent += `\n\t${index + 1}° pair = ${pair}`;
  })
});



console.log(pairs)