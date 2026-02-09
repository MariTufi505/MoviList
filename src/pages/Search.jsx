import { useState } from "react";
import ButtonGrey from "../components/ButtonGrey";

const Search = () => {
  const [movieLooking, setMovieLooking] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (movieLooking.trim().length === 0) {
      setError("Introduce el nombre de una película, por favor");
      return;
    }

    setError("");
    console.log("Buscando:", movieLooking);
  };

  return (
    <>
      <div className="text-white">
        <p className="flex justify-center text-4xl m-9 text-center">
          ¿Qué película estás buscando?
        </p>
        <div className="grid grid-cols-1 m-auto text-center p-5">
          <form id="movieForm" onSubmit={handleSubmit}>
            <input
              type="text"
              id="movieInput"
              value={movieLooking}
              placeholder="El resplandor, It..."
              onChange={(e) => setMovieLooking(e.target.value)}
              className="bg-gray-800 border text-white border-white w-2/4 p-7 m-auto h-1/2 rounded-3xl"
            />
            <div className="flex justify-center p-10">
              <button
                type="submit"
                className="cursor-pointer bg-gray-300 rounded-2xl p-2 w-25 text-black"
              >
                Buscar
              </button>
            </div>
          </form>
          {error && (
            <p className="text-red-500 mt-3 text-center font-semibold">
              {error}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
