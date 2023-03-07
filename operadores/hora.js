let hora = 23; //23
let minutos = 59; //59
let segundos = 59; // 59

if (segundos >= 0 && segundos < 60) {
  segundos++;
}

if (segundos === 60) {
  segundos = 0;
  minutos++;
}

if (minutos === 60) {
  minutos = 0;
  hora++;
}

if (hora === 24) {
  hora = 0;
  minutos = 0;
  segundos = 0;
}
console.log(`Hora: ${hora}, Minutos: ${minutos}, Segundos:${segundos}`);
