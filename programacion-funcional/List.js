const students2 = [
  {
    name: "Anna",
    sex: "f",
    grades: [4.5, 3.5, 4],
  },
  {
    name: "Dennis",
    sex: "m",
    country: "Germany",
    grades: [5, 1.5, 4],
  },
  {
    name: "Martha",
    sex: "f",
    grades: [5, 4, 2.5, 3],
  },
  {
    name: "Brock",
    sex: "m",
    grades: [4, 3, 2],
  },
];
// Se usa el nombre las variables con su primera letra en mayuscula y se hacen mas descriprivas, teniendo hasta tres palabras
function ResultforWomen(ListofStudents) {
  const ListOfWomen = (Student) => Student.sex === "f";
  const AverageScore = (Arr) =>
    (Arr.grades =
      Arr.grades.reduce(
        (ParameterA, ParameterB) => ParameterA + ParameterB,
        0
      ) / Arr.grades.length);
  const filter = (Student, Func) => Student.filter(Func);
  const Result = filter(filter(ListofStudents, ListOfWomen), AverageScore);
  return Result;
}

const Mostrar = ResultforWomen(students2);
console.log(Mostrar);

