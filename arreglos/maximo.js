const valores = [3, 11, 7, 2, 9, 10];
const guarismos = [29,14,54,16,87];
const mostrar = Math.max.apply(null,valores);
console.log(mostrar)
function maximo (guarismos){
  let maximo = guarismos[0];
  for ( i of guarismos){
    if( i > maximo) maximo = i;
  }
  return maximo
}
console.log(maximo(guarismos))