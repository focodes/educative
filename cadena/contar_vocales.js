let word = "especulativo";
let counter = 0;
for (element of word) {
  if (
    element == "a" ||
    element == "e" ||
    element == "i" ||
    element == "o" ||
    element == "u"
  ) {
    console.log(element)
    counter++;
  }
}
console.log(counter);
