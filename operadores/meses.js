let posicionMes = 2;

const nombreDeLosMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Dicembre']

switch (posicionMes) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    posicionMes -= 1;
    console.log(`El mes de ${nombreDeLosMeses[posicionMes]} tiene 31 días`);
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    posicionMes -= 1;
    console.log(`El mes de ${nombreDeLosMeses[posicionMes]} tiene 31 días`);
    break;
  case 2:
    posicionMes -= 1;
    console.log(`El mes de ${nombreDeLosMeses[posicionMes]} tiene 31 días`);
    break;
}

// solucion con un if 

if (
  posicionMes === 1 ||
  posicionMes === 3 ||
  posicionMes === 5 ||
  posicionMes === 7 ||
  posicionMes === 8 ||
  posicionMes === 10 ||
  posicionMes === 12 
  ) {
    console.log('El mes tiene 31 días');
  }
else if (
  posicionMes === 4 ||
  posicionMes === 6 || 
  posicionMes === 9 ||
  posicionMes === 11 
){
  console.log('El mes tiene 30 días');
}
else if (
  posicionMes === 2 
) {
  console.log('El mes tiene 28 días');
   
}