export const data = {
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

export const getAllStudents = () => {
  let studentsNotFiltered = Object.values(data).flatMap((flat) => flat.flatMap((newFlat) => newFlat));
  return studentsNotFiltered.filter((student, index) => studentsNotFiltered.indexOf(student) == index);
};