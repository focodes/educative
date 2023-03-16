const movieList = [
  {
    title: "Batman",
    year: 1989,
    director: "Tim Burton",
    imdbRating: 7.6,
  },
  {
    title: "Batman Returns",
    year: 1992,
    director: "Tim Burton",
    imdbRating: 7.0,
  },
  {
    title: "Batman Forever",
    year: 1995,
    director: "Joel Schumacher",
    imdbRating: 5.4,
  },
  {
    title: "Batman & Robin",
    year: 1997,
    director: "Joel Schumacher",
    imdbRating: 3.7,
  },
  {
    title: "Batman Begins",
    year: 2005,
    director: "Christopher Nolan",
    imdbRating: 8.3,
  },
  {
    title: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    imdbRating: 9.0,
  },
  {
    title: "The Dark Knight Rises",
    year: 2012,
    director: "Christopher Nolan",
    imdbRating: 8.5,
  },
];

const titles  = movies => movies.map(index => index.title);
console.log(titles(movieList));

const byNolan = movie => movie.director === "Christopher Nolan";
const filter = (movies, func) => movies.filter(func);

const nolanMovieList = filter(movieList, byNolan);
console.log(nolanMovieList.length);

const goodRating = index => index.imdbRating >= 7.5;
const rating = movies => movies.map(index => index.imdbRating);
const average = array => array.reduce((sum, value) => sum + value, 0) / array.length;
console.log(titles(filter(movieList,goodRating)));
console.log(average(rating(nolanMovieList)))