const apiKey = 'b4cdfba7';
const form = document.querySelector('form');
const submitBtn = document.querySelector('#submitBtn');
const movieInfo = document.querySelector('#movieInfo');

async function getMovieInfo(title) {
  const response = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=b4cdfba7`);
  const data = await response.json();
  return data;
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const movieData = await getMovieInfo(title);
  if (movieData.Response === "False") {
    movieInfo.innerHTML = `<p>No movie found with title "${title}".</p>`;
  } else {
    movieInfo.innerHTML = `
      <h2>${movieData.Title} (${movieData.Year})</h2>
      <img src="${movieData.Poster}" alt="${movieData.Title} poster">
      <p>Genre: ${movieData.Genre}</p>
      <p>Director: ${movieData.Director}</p>
      <p>Actors: ${movieData.Actors}</p>
      <p>Plot: ${movieData.Plot}</p>
    `;
  }
});