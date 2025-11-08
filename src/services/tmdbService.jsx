const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";

export const getImageUrl = (backdrop, size = "w1280") => {
  if (!backdrop) return null;
  return `${IMAGE_BASE_URL}${size}${backdrop}`
}

export const MoviesDescription = (overview) => {
  if (!overview) return null;
  return `${BASE_URL}${overview}`;
};

export const obtenerPeliculasPopulares = async () => {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-ES`
  );
  const data = await response.json();
  return data.results;
};

export const getMovieDetails = async (movieId) => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=es-ES`
  )
  return response.json()
}

export const getMovieById = async (movieId) => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=es-ES`
  );
  const data = await response.json();
  return data;
};