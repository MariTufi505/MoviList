import React from 'react'

const PeliculasAgregadas = () => {
  return (
    <div className="m-2 text-white">
      <div className="flex m-1">
        <p>The Shawshank Redemption</p>
        <button className="cursor-pointer bg-gray-300 rounded-2xl  text-black p-2 w-25 m-2 ">
          Agregar
        </button>
        <button className="cursor-pointer bg-gray-300 rounded-2xl  text-black p-2 w-25 m-2 ">
          Eliminar
        </button>
      </div>
      <hr className='w-80 m-5'/>
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
  );
}

export default PeliculasAgregadas