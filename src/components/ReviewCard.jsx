


const List = () => {
  return (
    <div>
      <p className="text-white mt-4 ml-2 mb-4 p-2 text-2xl">Últimas Vistas</p>
      
      
      
      <div className="flex justify-center">
        <hr className="border-t border-white w-80 flex" />
      </div>
      <div className="flex justify-between text-white p-2  m-5">
        <p>Stand by Me</p>
        <p>Estrellas</p>
        <p>01/02/3044</p>
      </div>
      <div className="flex justify-between text-white p-2  m-5">
        <p>Stand by Me</p>
        <p>Estrellas</p>
        <p>01/02/3044</p>
      </div>
      <div className="flex justify-between text-white p-2  m-5">
        <p>Stand by Me</p>
        <p>Estrellas</p>
        <p>01/02/3044</p>
      </div>
      <div className="flex justify-center">
        <button className="cursor-pointer bg-gray-300 rounded-2xl p-2 w-25 m-2 ">
          Ver más
        </button>
      </div>
      <p className="text-white m-2">Mes Pasado</p>
      <div className="flex justify-center">
        <hr className="border-t border-white m-1 w-80 flex justify-center" />
      </div>
      <div className="flex justify-between text-white p-2  m-2">
        <p>Stand by Me</p>
        <p>Estrellas</p>
        <p>01/02/3044</p>
      </div>
      <div className="flex justify-between text-white p-2 m-2">
        <p>Stand by Me</p>
        <p>Estrellas</p>
        <p>01/02/3044</p>
      </div>
      <div className="flex justify-between text-white p-2 m-2">
        <p>Stand by Me</p>
        <p>Estrellas</p>
        <p>01/02/3044</p>
      </div>
      <div className="flex justify-center">
        <button className="cursor-pointer bg-gray-300 rounded-2xl p-2 w-25 m-2 ">
          {" "}
          Ver más
        </button>
      </div>
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
    </div>
  );
}

export default List