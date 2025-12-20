import { useState } from "react";
import ButtonGrey from "../components/ButtonGrey";


const Search = () => {
  const [movieLooking, setMovieLooking] = useState("")

  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
  
    if (movieLooking.trim().length === 0) {
       setError("Introduce el nombre de una pelicula");
       return;
     }

    setError("");
      console.log("Buscando:", movieLooking);
  }



  return (
    <>
      <div className="text-white">
        <p className="flex justify-center text-4xl m-9 text-center">
          ¿Que película estas buscando?
        </p>
        <div className="bg-black border  sm:w-1/2 w-3/4  p-4 m-9 h-1/2 rounded-3xl">
          <form id="Movie" onSubmit={handleSubmit}>
            <input
              type="text"
              id="Movie"
              value={movieLooking}
              placeholder="El resplandor, It..."
              onChange={(e) => setMovieLooking(e.target.value)}
            />
            <button
              type="submit"
              value="Movie"
              className="cursor-pointer bg-gray-300 rounded-2xl p-2 w-25 m-2 text-black"
            >
              Buscar
            </button>
          </form>
          {error && (
            <p className="text-red-500 mt-3 text-center font-semibold">
              {error}
            </p>
          )}
        </div>
        <div className="flex justify-center"></div>
      </div>
    </>
  );
}

export default Search