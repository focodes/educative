const numbers = [1, 5, 10, 15, 20];

const doubles = numbers.map(index => index * 2);
console.log(numbers)
console.log(doubles)

const filter = numbers.filter(index => index >= 10);
console.log(numbers)
console.log(filter)

const sum = numbers.reduce((acc,value) => acc  + value, 0);
console.log(sum)

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


// replacement of the title function
const tiles = movies => {
  return movies.map(index => index.title)
}

//Return a new aray containing only movies by Christopher Nolan
const nolanMovies = movies => {
  return movies.filter(index => index.director === 'Christopher Nolan')
}

//filter movies by IMDB rating, then creates a movie titles array  
const bestTitles = movies => {
  return movies.filter(index => index.imdbRating >= 7.5).map(index => index.title);
}

console.log(bestTitles(movieList));

// compute the sum of all movie IMDB raings
const averageRating = movies => {
  const ratingSum = movies.reduce((acc, movie) => acc + movie.imdbRating,0);
  return ratingSum / movies.length;
}

console.log(averageRating(movieList))