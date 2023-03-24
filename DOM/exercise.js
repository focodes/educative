function linkInfo() {
  const linkElements = document.getElementsByTagName("a");
  const linkCount = linkElements.length;

  if (linkCount > 0) {
    const firstLink = linkElements[0].getAttribute("href");
    const lastLink = linkElements[linkCount - 1].getAttribute("href");
    console.log(
      `Total links: ${linkCount}, firstLink: ${firstLink}, lastLink: ${lastLink} `
    );
  }
}

//funcion que revisa la existnecia de una clase dada una iD
function has(id, someClass){
  const element = document.getElementById(id);
  if (element != null){
    return element.classList.contains(someClass)
  }
  else {
    return "ID Not Found"
}
}