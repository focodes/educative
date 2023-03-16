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
//get movies titles
const title = () => {
  const titles = [];
  for (movie of movieList){
    titles.push(movie.title);
  }
  return titles;
};

const nolanMoviesList = [];
//get movies by Christopher Nolan
const nolanMovies = () => {
  for (const movie of movieList){
    if (movie.director === "Christopher Nolan"){
      nolanMoviesList.push(movie)
    }
  }
}

// get titles of movies wiht an IMDB rating greater or equal 7.5
const bestTitles = () => {
  const bestTitles = [];
  for (const movie of movieList){
    if (movie.imdbRating >= 7.5){
      bestTitles.push(movie.title);
    }
  }
  return bestTitles
}

// compute average rating of Christopher Nolan's movies
const averageNolanRating = () => {
  let ratingSum = 0;
  for (const movie of movieList){
    ratingSum += movie.imdbRating;
  }
  return ratingSum / nolanMoviesList.length;
}



console.log(title());
nolanMovies();
console.log(nolanMoviesList.length);
console.log(bestTitles());
console.log(averageNolanRating())