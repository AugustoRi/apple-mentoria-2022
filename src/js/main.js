import { data, getAllStudents } from "../services/database/students";

const possiblesPairs = (arr, studentSelected) => {
  const newArrayWithoutRepeatedTeams = arr.filter((studentsTeams) => {
    return studentsTeams.indexOf(studentSelected) === -1;
  })
  .flatMap((uniqueArray) => uniqueArray);
  return newArrayWithoutRepeatedTeams;
};

getAllStudents().forEach((student) => {
  const cycles = Object.values(data);
  cycles.forEach((cycle) => { 
    const pairs = possiblesPairs(cycle, student);

    console.log(pairs)
  })
});
