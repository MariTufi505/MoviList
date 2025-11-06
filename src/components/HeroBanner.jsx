
const HeroBanner = () => {
  return (
    <>
      <div className="w-screen">
        <hr className="border-white" />

        <div className="w-screen h-screen relative overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src="/public/Stand-By-Me-Stephen-King-analisis-CinemaNet-1.jpg"
            alt="Imagen de referencia de la película"
          />
          <div className="absolute inset-0 flex items-center justify-center text-white text-7xl font-bold bg-black/60">
            <p className="bg-black/50 m-4"> ¿Qué película viste?</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroBanner