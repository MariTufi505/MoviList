import { useState, useEffect } from "react";
import { getImageUrl, getMovieById } from "../services/tmdbService";
import { searchMovies } from "../services/tmdbService";

const HeroBanner = ({onAgregarReseña}) => {
  const [fase, setFase] = useState("inicio");
  const [pelicula, setPelicula] = useState(null);
  const [nombrePelicula, setNombrePelicula] = useState("");
  const [estrellas, setEstrellas] = useState("");
  const [reseña, setReseña] = useState("");
  const [sugerencias, setSugerencias] = useState([])
 
    useEffect(() => {
      if (nombrePelicula.length < 2){
        setSugerencias([]);
        return
      }

      const timer = setTimeout(() => {
        searchMovies(nombrePelicula).then(setSugerencias);
      }, 400)

      return () => clearTimeout(timer)
    }, [nombrePelicula])

  useEffect(() => {
    const MOVIE_ID = 680;
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

        <div className="absolute inset-0 flex items-center justify-center text-white text-7xl font-bold bg-black/60 px-4">
          {fase === "inicio" && (
            <button
              className="bg-black/50 p-4 sm:p-6 md:p-8 rounded w-full max-w-[770px] text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-center cursor-pointer hover:bg-black/70 transition-colors"
              onClick={() => setFase("nombre")}
            >
              ¿Qué película viste?
            </button>
          )}

          {fase === "nombre" && (
            <form
              className="flex flex-col items-center w-full max-w-[770px] gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                setFase("estrellas");
              }}
            >
              <input
                id="NombrePelicula"
                value={nombrePelicula}
                onChange={(e) => setNombrePelicula(e.target.value)}
                type="text"
                placeholder="Escribe el nombre..."
                className="bg-black/50 p-4 sm:p-5 md:p-6 text-2xl sm:text-4xl md:text-5xl lg:text-7xl rounded text-center w-full text-white outline-none border-2 border-white/30 focus:border-white/60"
                autoFocus
              />

              {sugerencias.length > 0 && (
                <ul className="w-full bg-black/80 rounded border border-white/20">
                  {sugerencias.slice(0, 5).map(
                    (
                      pelicula,
                    ) => (
                      <li
                        key={pelicula.id}
                        className="p-3 text-white text-xl cursor-pointer hover:bg-white/20"
                        onClick={() => {
                          setNombrePelicula(pelicula.title); 
                          setSugerencias([]); 
                        }}
                      >
                        {pelicula.title} ({pelicula.release_date?.slice(0, 4)})
    
                      </li>
                    ),
                  )}
                </ul>
              )}

              <button
                type="submit"
                className="bg-black/50 p-3 sm:p-4 md:p-6 rounded text-xl sm:text-3xl md:text-4xl lg:text-6xl cursor-pointer hover:bg-black/70 transition-colors"
              >
                Enviar
              </button>
              <button
                type="button"
                onClick={() => setFase("inicio")}
                className="text-xl sm:text-3xl md:text-4xl lg:text-6xl cursor-pointer hover:text-gray-300 transition-colors mt-2"
              >
                Volver
              </button>
            </form>
          )}

          {fase === "estrellas" && (
            <form
              className="flex flex-col items-center w-full max-w-[770px] gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                setFase("reseña");
              }}
            >
              <input
                id="EstrellasDadas"
                value={estrellas}
                onChange={(e) => setEstrellas(e.target.value)}
                type="number"
                min="1"
                max="5"
                placeholder="¿Cuántas estrellas? (1-5)"
                className="bg-black/50 p-4 sm:p-5 md:p-6 text-2xl sm:text-4xl md:text-5xl lg:text-7xl rounded text-center w-full text-white outline-none border-2 border-white/30 focus:border-white/60"
                autoFocus
              />
              <button
                type="submit"
                className="bg-black/50 p-3 sm:p-4 md:p-6 rounded text-xl sm:text-3xl md:text-4xl lg:text-6xl cursor-pointer hover:bg-black/70 transition-colors"
              >
                Enviar
              </button>
              <button
                type="button"
                onClick={() => setFase("reseña")}
                className="text-xl sm:text-3xl md:text-4xl lg:text-6xl cursor-pointer hover:text-gray-300 transition-colors mt-2"
              >
                Volver
              </button>
            </form>
          )}
          {fase === "reseña" && (
            <form
              className="flex flex-col items-center w-full max-w-[770px] gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                onAgregarReseña({
                  nombre: nombrePelicula,
                  estrellas: Number(estrellas),
                  reseña: reseña,
                });
                console.log("Nombre de la Película: ", nombrePelicula);
                console.log("Estrellas dadas: ", estrellas);
                console.log("Reseña dada: ", reseña);

                setNombrePelicula("");
                setEstrellas("");
                setReseña("");
                setFase("inicio");
              }}
            >
              <input
                value={reseña}
                id="ReseñaDada"
                onChange={(e) => setReseña(e.target.value)}
                type="text"
                placeholder="¿Que reseña le das?"
                className="bg-black/50 p-4 sm:p-5 md:p-6 text-2xl sm:text-4xl md:text-5xl lg:text-7xl rounded text-center w-full text-white outline-none border-2 border-white/30 focus:border-white/60"
                autoFocus
              />
              <button
                type="submit"
                className="bg-black/50 p-3 sm:p-4 md:p-6 rounded text-xl sm:text-3xl md:text-4xl lg:text-6xl cursor-pointer hover:bg-black/70 transition-colors"
              >
                Enviar
              </button>
              <button
                type="button"
                onClick={() => setFase("nombre")}
                className="text-xl sm:text-3xl md:text-4xl lg:text-6xl cursor-pointer hover:text-gray-300 transition-colors mt-2"
              >
                Volver
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
