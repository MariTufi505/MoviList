

const Card = ({ reseñas = []}) => {
  return (
    <>
      <div>
        <hr className="border-amber-50 m-9" />
        <p className="text-white mt-4 ml-2 mb-4 p-10 text-5xl flex justify-center ">
          Últimas Vistas
        </p>

        <hr className="border-t border-white w-90 md:w-60 mx-auto" />
        <div className="bg-linear-to-br from-gray-700 to-gray-800 mt-10 mb-10 border w-3/4 border-gray-800 text-center mx-auto rounded-3xl">
          <div className="flex text-2xl text-center text-white p-2 md:text-3xl m-5 justify-around">
            <p>Películas Agregadas</p>
          </div>
          <hr className="border-t border-white w-80 m-auto" />

          {reseñas.length === 0 ? (
            <p className="text-white m-5">No hay reseñas todavía.</p>
          ) : (
            reseñas.map((r, index) => (
              <div key={index}>
                <div className="grid-cols-1 text-white p-1 m-5 text-center md:text-xl">
                  <p>{r.nombre}</p>
                  <p>{"⭐".repeat(r.estrellas)}</p>
                  <p>{new Date().toLocaleDateString()}</p>
                  <div className="grid-cols-2 p-1">
                  <button className="cursor-pointer p-2 m-2 text-black bg-gray-300 rounded-2xl  ">
                    Eliminar
                  </button>
                  <button className="cursor-pointer p-2 m-2 text-black bg-gray-300 rounded-2xl ">
                    Editar
                  </button>
                  </div>
                </div>
                <hr className="border-t border-white w-60 m-auto" />
              </div>
            ))
          )}

          <button className="cursor-pointer m-5 bg-gray-300 rounded-2xl p-2 w-25">
            Ver más
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
