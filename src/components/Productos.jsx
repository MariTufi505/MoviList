import React from 'react'

const Productos = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <h1 className="mt-10 flex justify-center text-white text-3xl font-serif">
        Mis Productos
      </h1>
      <div className="bg-amber-100 w-3/4 rounded-lg mt-2 mx-auto p-4">
        <div className="flex flex-col space-y-4">
          <div className="bg-amber-50 p-4 rounded-md flex justify-center">
            <p>Tortas</p>
          </div>
          <div className="bg-amber-50 p-4 rounded-md flex justify-center">
            <p>Cookies</p>
          </div>

          <div className="bg-amber-50 p-4 rounded-md flex justify-center">
            <p>Tortitas</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productos;