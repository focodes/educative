console.log(document.body.childNodes[5].childNodes[1].innerHTML);

const titleElements = document.getElementsByTagName("h2");
console.log(titleElements[0].innerHTML);
console.log((titleElements.length))

const text = document.getElementsByTagName("p");

const textualContent = document.getElementById("content").textContent  // Solo toma el texto de las etiquetas
console.log(textualContent);
const attributeValue = document.querySelector("a").getAttribute("href"); //accede al contenido de una etiqueta especificada
// También se puede acceder directamente
const directAttribute = document.querySelector("a").href
console.log(attributeValue, directAttribute)

if (document.querySelector("a").hasAttribute("target")){
    console.log("The first link has a target attribute. ");
}else {
    console.log("the first link does not have a target attribute");
}

const classes = document.getElementById("ancient").classList;
console.log(classes.length);
console.log(classes[0]);

const checkPresenceClass =  String(document.getElementById("ancient").classList.contains("wonders"))

//counting elements
function countElements(myElements){
    const countElements = document.querySelectorAll(myElements).length
    // Se usa para seleccionar elementos y devuelve una NodeList
}