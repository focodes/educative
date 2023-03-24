class Link {
  constructor(title, url, author) {
    let absoluteUrl = url;
    //check
    if (
      !absoluteUrl.startsWith("https://") &&
      !absoluteUrl.startsWith("http://")
    ) {
      absoluteUrl = `http://${absoluteUrl}`;
    }
    this.title = title;
    this.author = author;
    this.url = absoluteUrl;
  }
  toString() {
    return `${this.title} (${this.url}) Autor: ${this.author}`;
  }
}

const links = [];
links.push(new Link("ChatGPT", "https://chat.openai.com/chat", "Open IA"));
links.push(new Link("Raindrop", "https://app.raindrop.io/my/-1", "Eugene"));
links.push(
  new Link("Educative", "https://www.educative.io/learn/home", "Mimit")
);

let choice;
while (choice !== "0") {
  let choices = "\n1: Show links";
  choices += "\n2: Add link";
  choices += "\n3: Remove a link";
  choices += "\n0: Quit";
  choice = prompt(`Choose an option: ${choices}`);

  switch (choice) {
    case "1": {
      if (links.length > 0) {
        for (let i = 0; i < links.length; i++) {
          alert(`${i + 1}: ${links[i].toString()}`);
        }
      } else {
        alert("No links to display!");
      }
      break;
    }
    case "2": {
      const title = prompt("Enter the link title : ");
      const url = prompt("Enter the link url: ");
      const author = prompt("Enter the link author");
      links.push(new Link(title, url, author));
      break;
    }
    case "3": {
      if (links.length > 0) {
        let index = -1;
        const maxIndex = links.length;
        while (index < 1 || index > links.length) {
          index = Number(
            prompt(
              `Enter the index of the link to be remove (between 1 and ${maxIndex}):`
            )
          );
        }
        links.splice(index - 1, 1);
      } else {
        alert("No links to remove! ");
      }
      break;
    }
  }
}
alert("See you later! ");
