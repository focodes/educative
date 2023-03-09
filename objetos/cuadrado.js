const cuadrado = {
  lado: 58.48903,
  area(){
    area = this.lado * this.lado
    return area.toFixed(2)
  },
  perimetro(){
    perimetro = this.lado * 2
    return perimetro.toFixed(2)    
  }
}

console.log(cuadrado.area())
console.log(cuadrado.perimetro())

