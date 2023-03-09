const calculadora = (primerDigito, operacion, segundoDigito) => {
  if (operacion == '+'){
    return primerDigito + segundoDigito
  }
  else if (operacion == '-'){
    return primerDigito - segundoDigito
  }
  else if (operacion == '*'){
    return primerDigito * segundoDigito
  }
  else if (operacion == '/'){
    return primerDigito / segundoDigito
  }
}

console.log(calculadora(3, "/",3))