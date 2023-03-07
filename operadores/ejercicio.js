const diaIngresado = prompt('¿Qué día es hoy?');

switch(diaIngresado){
  case 'Lunes':
    console.log('Mañna será martes');
    break;
  case 'Martes':
    console.log('Mañana será miércoles');
    break;
  case 'Miércoles':
    console.log('Mañana será jueves');
    break;
  case 'Jueves':
    console.log('Mañana será viernes');
    break;
  case 'Viernes':
    console.log('Mañana es fin de semana');
    break;
  default:
    console.log('Entrada incorrecta');
    break;
}

/*
Misma solucion con el uso de un if anidado
*/

if (diaIngresado === 'Lunes'){
  console.log('Mañana será martes');
}
else if(diaIngresado === 'Martes') {
  console.log('Mañana será miércoles');
}
else if (diaIngresado === 'Miercoles'){
  console.log('Mañana será jueves');
}
else if (diaIngresado === 'Jueves'){
  console.log('Mañana será viernes');
}
else if (diaIngresado === 'Viernes'){
  console.log('Mañana es fin de semana');
}
else{
  console.log('Entrada incorrecta');

}