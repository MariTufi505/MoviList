import { useState, useEffect } from "react";
import { getImageUrl, getMovieById } from "../services/tmdbService";
import ButtonGrey from "./ButtonGrey";

const HeroBanner = () => {

const [mostrarInput, setMostrarInput] = useState(false)

const [mostrarHeroBanner, setMostrarHeroBanner] = useState(true)

const [mostrarPregunta, setMostrarPreguntar] = useState(true);

const [pelicula, setPelicula] = useState(null);

 useEffect(() => {
   const MOVIE_ID = 680;
   getMovieById(MOVIE_ID).then(setPelicula);
 }, []);

 const handleClick = () =>{
  setMostrarInput(!mostrarInput)  
 };

 

  
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

      {!mostrarInput ? (
        <div className="w-screen h-screen relative overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={getImageUrl(pelicula.backdrop_path, "w1280")}
            alt={pelicula.title}
          />
          <div className="absolute inset-0 flex items-center justify-center text-white text-7xl font-bold bg-black/60">
            <a
              className="bg-black/50 m-4 p-6 cursor-pointer rounded max-w-[770px] text-center"
              onClick={(e) => {
                e.preventDefault();
                handleClick();
              }}
            >
              <p>¿Qué película viste?</p>
            </a>
          </div>
        </div>
      ) : (
        <div>
          <div className="w-screen h-screen relative overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src={getImageUrl(pelicula.backdrop_path, "w1280")}
              alt={pelicula.title}
            />
            <div className="absolute inset-0 flex items-center justify-center text-white text-7xl font-bold bg-black/60">
              <input
                name="Moviesubmit"
                id="Moviesubmit"
                type="text"
                className="bg-black/50 m-4 p-6 cursor-pointer rounded max-w-[770px] text-center"
                onClick={(e) => {
                  e.preventDefault();
                }}
              />
              <input
                type="submit"
                className="bg-black/50 m-4 p-6 cursor-pointer rounded max-w-[770px] text-center"
                onClick={(e) => {
                  e.preventDefault();
                }}
              />
              <a href="/" target="_self" onClick={(e) =>{(
                !mostrarInput
            )}}>Volver</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroBanner;