
const HeroBanner = () => {
  return (
    <>
      <div className="relative h-100 w-screen">
        <div>
          <img
            src="/public/Stand-By-Me-Stephen-King-analisis-CinemaNet-1.jpg"
            alt=""
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 flex items-center">
          <p className="text-white text-5xl font-bold z-1">
            ¿Qué película viste?
          </p>
        </div>
      </div>
    </>
  );
}

export default HeroBanner