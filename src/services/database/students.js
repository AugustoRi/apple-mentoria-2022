const data = {
  ciclo1: [
    ["Laura", "Pedro", "João", "Vinicius"],
    ["Carlos", "Maria", "Leonardo", "Ana"],
    ["Daniela", "Marcos", "Wesley", "Luiza"],
    ["Daiane", "Felipe", "Teodoro", "Helena"],
    ["Natalia", "Beatriz", "Eduardo", "Caio"],
  ],
  ciclo2: [
    ["Teodoro", "Daiane", "Luiza"],
    ["Carlos", "João", "Helena"],
    ["Daniela", "Pedro", "Caio"],
    ["Leonardo", "Maria", "Laura"],
    ["Beatriz", "Marcos", "Vinicius"],
    ["Natalia", "Felipe", "Eduardo"],
    ["Ana", "Wesley"],
  ],
};

const removeDuplicatesInArray = (arr) => {
  return arr.filter((value, index) => arr.indexOf(value) == index);
};

const getAllStudents = () => {
  let studentsNotFiltered = Object.values(data).flat().flat();
  return removeDuplicatesInArray(studentsNotFiltered);
};

const getAllTeams = () => {
  return Object.values(data).flat();
};

const allStudents = getAllStudents();
const allTeams = getAllTeams();

export { allStudents, allTeams };