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
        {pelicula.map(pelicula => (
          <div key={pelicula.id} className="border rounded p-4">
            {/* Aquí está la imagen */}
            <img 
              src={getImageUrl(pelicula.poster_path)} 
              alt={pelicula.title}
              className="w-full rounded"
            />
            <p className="mt-2 font-semibold">{pelicula.title}</p>
            <p className="text-sm text-gray-600">{pelicula.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  )
}



export default App;