// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arrayOfMovies) {
  let directors = arrayOfMovies.map((singleMovie) => {
    return singleMovie.director;
  });
  return directors;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(bestDrama) {
  let dramaMovie = bestDrama.filter((movie) => {
    return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama');
})
  return dramaMovie.length;

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  let totalScore = arr.reduce((total, elem) => {
    if(elem.score === undefined) return total;
    return total + elem.score;
  },0);
  if(arr.length === 0) return 0;

return Math.round((totalScore / arr.length)*100)/100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arrMovies) {
  const getMovies = movie => {
    const { genre } = movie
    return (
      genre.includes('Drama')
    )
  }

  const movies = arrMovies.filter(getMovies)

  const avg = movies.reduce((acc, current) => {
    const { score } = current

    return acc += score
  }, 0)

  return movies.length === 0 ? 0 : Number((avg / movies.length).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array){
  const filterYear = array.slice().sort(function(a, b){
    if(a.year !== b.year){
      return a.year - b.year;
    }else {
      return a.title.localeCompare(b.title);
    }
  });
  return filterYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {

  let onlyTitles = arr.map(movie => movie.title)

  let sortedByName = onlyTitles.sort((a, b) => {
    return a.localeCompare(b)
  }).slice(0,20);
  return sortedByName
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
