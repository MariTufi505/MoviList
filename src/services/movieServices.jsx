const API_KEY = "23808905790c4f5bb50190d49a0ea665";
const BASE_URL = "https://api.themoviedb.org/3";

export const obtenerPelicula = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    return response.json();
}
