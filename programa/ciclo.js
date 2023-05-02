// Este programa recoge lo que se debería hacer y no durante el día
const wakeUp_time = 5;
// El formato de horas será de 24
const sleeping_time = 21;
//hora actual

/*
método de gestión de tiempo que ayuda a aumentar la 
productividad al dividir el trabajo 
en intervalos de tiempo definidos y gestionar los descansos

ES IMPORTANTE 
Revisar la lista de distracciones: después de cada pomodoro, 
revisa la lista de distracciones o interrupciones que anotaste y 
aborda las que puedas durante tu próximo descanso o al final del día.*/

for (let index = 0; index < 20; index++) {
  const current_hour = Math.floor(Math.random() * 24) + 1;
  console.log(`Son las ${current_hour} horas`);
  if (current_hour >= 5 && current_hour < 6) {
    console.log("Ataviarse, preparar comida y ordenar lo del día");
  } else if (
    (current_hour >= 6 && current_hour <= 11) ||
    (current_hour >= 13 && current_hour <= 18)
  ) {
    console.log(`Sergio es tiempo de estudiar recuerda
  1. Seleccionar una tarea especifica
  2. Concentrarte en tú tarea especifica durante 55 minutos y descansar 5 minutos
  3. Anotar en una lista todo lo demás para abordalo después
  4. Tener un descanso largo luego de cuatro pomodoros
  5. Revisar la lista de distracciones en un espacio distinto`);
  } else if (current_hour >= 12 && current_hour < 13) {
    console.log("Almorzar, descansar (escuchar música)");
  } else if (current_hour >= 19 && current_hour < 21) {
    console.log("Estas a poco horas de dormir, revisa lo pendiente");
  }
  else{
    console.log('>>>Hora de sueño<<<')
  }
}
/*Modificado*/