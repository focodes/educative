// modify page structure
document.getElementById("languages").innerHTML +=  "<li id='c'>C</li>";
document.getElementsByTagName("h1").innerHTML = "";

document.querySelector("h3").textContent += ' for programming';
document.querySelector("h3").setAttribute("id", "title");
//algunos exinten directamente
document.querySelector("h3").id = "heading 1";

// agregar clases 
const titleElement = document.querySelector("h3");
titleElement.classList.remove("beginning");
titleElement.classList.add("title");

//creando un nuevo elemento
const pythonElement = document.createElement("li");
pythonElement.id = "python";
pythonElement.textContent = "Python"

//insert 
document.getElementById("languages").appendChild(pythonElement);

//añadiendo ruby
const rubyElement = document.createElement("li");
rubyElement.id = "ruby";
rubyElement.appendChild(document.createTextNode("Ruby"));
document.getElementById("languages").appendChild(rubyElement)
//añadiendo perl antes de php
const perlElement = document.createElement("li");
perlElement.id = "ruby";
perlElement.appendChild(document.createTextNode("Perl"));
document.getElementById("languagues").insertBefore(perlElement, document.getElementById("php"))
document.getElementById("languagues").insertAdjacentHTML("afterbegin", '<li id="JavaScript">JavaScript</li>')



const lispElement = document.createElement("li"); // Create an li element
lispElement.id = "lisp";          // Define its ID
lispElement.textContent = "Lisp"; // Define its text content
// Replace the element identified by "perl" with the new element
document.getElementById("languages").replaceChild(lispElement, document.getElementById("perl"));



// Remove the element with the "lisp" id

document.getElementById("languages").removeChild(document.getElementById("lisp"));

