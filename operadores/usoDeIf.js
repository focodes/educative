const solicitarNumero = Number(prompt('Ingrese un numero aleatorio:'));

if (solicitarNumero > 0){
  console.log(`Su número fue ${solicitarNumero}\n y es positivo`);
}
else if(solicitarNumero<0){
  console.log(`Su número fue ${solicitarNumero}\n y es negativo`);
 }
 else{
  console.log(`Su número fue ${solicitarNumero}\n`);
 }
