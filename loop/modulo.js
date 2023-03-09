let datoUsuario = 4;

for (let iteracion = datoUsuario; iteracion < datoUsuario + 10; iteracion++){
  if (iteracion % 2 === 0 ){
    console.log(`${iteracion} es un número par`);
  }
  else {
    console.log(`${iteracion} es un número impar`);
  }
}

// Otra manera de solucionar 
let chequeador = false;

for(let i = 1; chequeador == false; i++){

  if (datoUsuario % 2 == 0){
    console.log(`${datoUsuario} es un número par`);
  }
  else{
    console.log(`${datoUsuario} es un número impar`);
  }
  
  datoUsuario++;

  if (i == 10){
    chequeador = true;
  }
}