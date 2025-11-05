import Instagram from "../img/instagram";

const Redes = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-orange-300 p-2 h-50 w-1/2 m-5 border rounded-full border-dotted border-white">
        <p className='flex justify-center text-white mt-3 text-2xl'>¡Mis Redes!</p>
        <p className='flex justify-center mt-4 ml-5 text-white italic'>
          ¡Hola! ¡Puedes segurime en Instagram! Publico mis trabajos más recientes:
        </p>
        <div className="flex justify-center mt-6 cursor-pointer">
        <Instagram />
        </div>
      </div>
    </div>
  );
}

export default Redes