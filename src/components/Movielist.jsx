import React from 'react'

const Movielistadd = () => {
  return (
    <div>
      <p className="text-white m-10 font-light text-4xl">
        {" "}
        ¿Que pelicula quieres agregar?
      </p>
      <hr className="border-t border-white flex justify-center m-2 text-" />
      <div className="m-2 text-white text-center">
        <div className="flex m-1">
          <p>The Shawshank Redemption</p>
          <button className="cursor-pointer bg-gray-300 rounded-2xl  text-black p-2 w-25 m-2 ">
            Agregar
          </button>
          <button className="cursor-pointer bg-gray-300 rounded-2xl  text-black p-2 w-25 m-2 ">
            Eliminar
          </button>
        </div>
        <hr className="w-80 m-5" />
        <div className="flex m-1">
          <p>The Shawshank Redemption</p>
          <button className="cursor-pointer bg-gray-300 rounded-2xl  text-black p-2 w-25 m-2 ">
            Agregar
          </button>
          <button className="cursor-pointer bg-gray-300 rounded-2xl text-black p-2 w-25 m-2 ">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Movielistadd