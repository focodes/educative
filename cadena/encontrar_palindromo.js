
function invert_Word(word){
  let invert_Word = '';
  console.log(word.length);
  for (let index = word.length - 1; index >= 0; index--) {
    invert_Word +=word[index];
  }
  return invert_Word
}
let word = 'reconocer'
let tomar_valor = invert_Word(word)

if (word == tomar_valor){
  console.log(true)
}