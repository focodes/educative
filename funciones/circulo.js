// Calcula el area y la circuferencia de un circulo 

const areaCirculo = (radio) => {
  const areaCirculo = Math.PI * Math.pow(radio,2);
  return areaCirculo 
}

function circunferencia (radio) {
  const circunferencia = 2 * Math.PI * radio;
  return circunferencia
}

console.log(areaCirculo(20))
console.log(circunferencia(12)) 