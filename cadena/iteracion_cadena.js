const inmutable_String = 'Mi hora de levantarme es a las 4:30 a.m.'
for ( let i = 0; i < inmutable_String.length; i++){
  console.log(inmutable_String[i]);
}

// tambien se puede iterar sobre las cadenas usando una notacion moderna
const favorite_Color = 'purple';
for (const letter of favorite_Color){
  console.log(letter)
};