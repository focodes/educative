const cuentaBancaria = {
  titular: 'Sergio',
  balance: 0,

  credito (valor){
    this.balance += valor;
    return this.balance
  },
  descripcion(){
    const texto = `Su nombre es ${this.titular} y su balance es de ${this.balance}`
    return console.log(texto)
  }
}
cuentaBancaria.credito(1200)
cuentaBancaria.descripcion()



