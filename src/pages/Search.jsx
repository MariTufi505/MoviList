

const Buscar = () => {
  return (
    <>
      <div className="text-white">
        <p className="flex justify-center text-4xl m-9 text-center">
          ¿Que película estas buscando?
        </p>
        <div className="bg-black border border-white w-auto p-4 m-9 h-1/2 rounded-3xl">
          <input type="text" placeholder="Escribe el nombre"></input>
        </div>
        <div className="flex justify-center">
          <input
            type="submit"
            value="Buscar"
            className="cursor-pointer bg-gray-300 rounded-2xl p-2 w-25 m-2 text-black"
          ></input>
        </div>
      </div>
    </>
  );
}

export default Buscar