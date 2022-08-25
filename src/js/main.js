import { data, getAllStudents } from "../services/database/students";

const cycles = Object.values(data);
console.log("primeiro ciclo", cycles[0]);

const studentSelected = "Marcos";

const possiblesPairs = (arr, studentSelected) => {
  const newArrayWithoutRepeatedTeams = arr.filter((studentsTeams) => {
    return studentsTeams.indexOf(studentSelected) === -1;
  });
  return newArrayWithoutRepeatedTeams;
};


for (let i = 0; i < cycles.length; i++) {
  const pairs = possiblesPairs(cycles[i], studentSelected);
  console.log(pairs)
}




// getAllStudents().map((student) => {

// });