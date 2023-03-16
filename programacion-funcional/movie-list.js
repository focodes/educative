// refactorización
const movie_list = [
  {
    title: "Spider-man",
    year: 2002,
    director: "Sam Raimi",
  },
  {
    title: "Spider-man 2",
    year: 2004,
    director: "Sam Raimi",
  },
  {
    title: "Spider-man 3",
    year: 2007,
    director: "Sam Raimi",
  },
];

//get movie titles
const titles = [];
for (const movie of movie_list){
  titles.push(movie.title)
} 
console.log(titles)