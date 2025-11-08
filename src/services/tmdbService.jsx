const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";

export const getImageUrl = (path, size = "w500") => {
  if (!path) return null; // Si no hay imagen, devuelve null
  return `${IMAGE_BASE_URL}${size}${path}`;
};

export const obtenerPeliculasPopulares = async () => {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-ES`
  );
  const data = await response.json();
  return data.results;
};
