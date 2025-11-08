import { useState, useEffect } from "react";
import { getImageUrl, getMovieById } from "../services/tmdbService";

const HeroBanner = () => {
  const [pelicula, setPelicula] = useState(null);

  useEffect(() => {
    const MOVIE_ID = 550;
    getMovieById(MOVIE_ID).then(setPelicula);
  }, []);
  
  if (!pelicula) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-black">
        <p className="text-white">Cargando...</p>
      </div>
    );
  }

  return (
    <div className="w-screen">
      <hr className="border-white" />

      <div className="w-screen h-screen relative overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src={getImageUrl(pelicula.backdrop_path, "w1280")}
          alt={pelicula.title}
        />
        <div className="absolute inset-0 flex items-center justify-center text-white text-7xl font-bold bg-black/60">
          <p className="bg-black/50 m-4 p-6 rounded max-w-[770px] text-center">
            ¿Qué película viste?
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;