
const Card = () => {
  return (
    <>
      <hr className="border-t border-white w-90 md:w-60 mx-auto " />
      <div className="bg-linear-to-br from-gray-600  to-gray-800 mt-10 mb-10 border w-3/4 border-gray-800 text-center mx-auto rounded-3xl ">
        <div className="flex justify-evenly text-2xs text-white p-2 md:text-3xl grid-cols-3 m-5">
          <p>Película</p>
          <p>Estrellas</p>
          <p>Fecha Agregado</p>
        </div>
        <hr className="border-t border-white w-80 m-auto" />

        <div className="flex justify-evenly text-2xs text-white p-1 grid-cols-3 m-5 text-center md:text-xl">
          <p>Stand By Me</p>
          <p>Estrellas</p>
          <p>05/30/1998</p>
        </div>
        <hr className="border-t border-white w-60 m-auto" />
        <div className="flex justify-evenly text-2xs text-white p-1 grid-cols-3 m-5 text-center md:text-xl">
          <p>Stand By Me</p>
          <p>Estrellas</p>
          <p>05/30/1998</p>
        </div>
        <hr className="border-t border-white w-60 m-auto" />
        <button className="cursor-pointer m-5 bg-gray-300 rounded-2xl p-2 w-25 ">
          Ver más
        </button>
      </div>
    </>
  );
}

export default Card