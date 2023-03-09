//comprobar si el numero se encuentra en un rango 
const numeroAleatorio = Number(prompt('Elija el numero a evaluar: '));

if ((numeroAleatorio >= 0) && (numeroAleatorio <= 100)){
  console.log(`Su número es ${numeroAleatorio} y está entre 0 y 100 incluidos`);
}