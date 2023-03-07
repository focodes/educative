let decision = prompt("¿si o no?");

while ((decision !== "si") && (decision !== "no")) {
  decision = prompt("¿si o no")
}

console.log(`¿Decir ${decision} era tan díficil?`)