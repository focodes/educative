const myPerro = {
  seudonimo: 'Parcero',
  raza: 'pastor',
  altura: 70,
  peso: 30,

  presentacion() {
    return `${this.seudonimo} es un ${this.raza} de ${this.altura} centimetros, le encanta jugar.`
  },
  ladrido(){
    return 'Guau!'
  }
}
 
console.log(myPerro.presentacion(), myPerro.ladrido())