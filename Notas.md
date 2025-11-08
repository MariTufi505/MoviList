// 1. Haces fetch a una API
export const buscarPeliculas = async (query) => {
  const response = await fetch(`${BASE_URL}/search/movie?query=${query}`)
  return response.json()
}

// 2. Llamas a otra función async
export const obtenerTodo = async () => {
  const peliculas = await getPopularMovies()  // Espera
  return peliculas
}

// 3. Usas setTimeout, leer archivos, etc.
export const esperar = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))
}

// 1. Solo transformas datos
export const formatearFecha = (fecha) => {
  return new Date(fecha).getFullYear()
}

// 2. Solo concatenas strings
export const crearURL = (path) => {
  return `https://ejemplo.com${path}`
}

// 3. Solo haces cálculos
export const calcularPromedio = (numeros) => {
  return numeros.reduce((a, b) => a + b) / numeros.length
}


import { useEffect, useState } from 'react'
import { obtenerPeliculasPopulares, getImageUrl } from "./services/tmdbService";

function App() {
  const [pelicula, setPelicula] = useState([]);

  useEffect(() => {
    obtenerPeliculasPopulares().then(setPelicula);
  }, []);

   return (
     <div className="p-8">
       <h1 className="text-3xl font-bold mb-6">Películas Populares</h1>
       <div className="grid grid-cols-4 gap-4">
         {pelicula.map((pelicula) => (
           <div key={pelicula.id} className="border rounded p-4">
             <img
               src={getImageUrl(pelicula.backdrop_path)}
               alt={pelicula.title}
               className="w-full rounded"
             />
             <p className="mt-2 font-semibold">{pelicula.original_title}</p>
             <p className="text-sm text-gray-600">{pelicula.release_date}</p>
             <p className="text-sm text-gray-600">{pelicula.overview}</p>
           </div>
         ))}
       </div>
     </div>


     backdrop_path - Imagen horizontal (para fondos)
javascriptmovie.backdrop_path  // "/fCayJrkfRaCRCTh8GqN30f8oyQF.jpg"

// Para usarla:
<img src={getImageUrl(movie.backdrop_path, 'w1280')} />
Tamaños disponibles:

Posters: w92, w154, w185, w342, w500, w780, original
Backdrops: w300, w780, w1280, original