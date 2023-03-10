const account = {
  titular: 'Sergio',
  balance: 0,

  credit (valor){
    this.balance += valor;
    return this.balance
  },
  description(){
    const text = `Su user es ${this.titular} y su balance es de ${this.balance}`
    return console.log(text)
  }
}
account.credit(1200)
account.description()



