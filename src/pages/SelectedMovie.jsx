
const Selectedmovie = () => {
  return (
    <>
    
    <div className="relative w-screen h-screen">
      <img
        className="h-full w-full object-cover"
        src="/public/Stand-By-Me-Stephen-King-analisis-CinemaNet-1.jpg"
        alt="Imagen de referencia de la película"
        />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/60">
        <p className="text-7xl font-bold flex items-center">Stand By Me</p>
        <p className="text-xl mt-4">Estrellas</p>
        <div className="bg-black border border-white h-32 w-80 mt-4 rounded-3xl p-4">
          <p>Comentario</p>
        </div>
        <button className="cursor-pointer bg-gray-300 rounded-2xl p-2 w-25 m-2 text-black">
          Modificar
        </button>
      </div>
    </div>
        </>
    
  );
}

export default Selectedmovie