class Account {
  constructor (noun, balance){
    this.noun = noun;
    this.balance = balance;
    this.credito = 0;
  }
  credit(value){
    this.credito += value;
    this.balance += value
  }

  describe(){
    return`${this.noun} is the account holder, its value is ${this.balance}, in credit has been granted ${this.credito}`
  }
}

const Pablo = new Account ('Pablo', 10);
console.log(Pablo.describe())
Pablo.credit(100);
console.log(Pablo.describe())
Pablo.credit(200)
console.log(Pablo.describe())

const Marcela = new Account ('Marcela', 50);
console.log(Marcela.describe());
Marcela.credit(250);
console.log(Marcela.describe());

