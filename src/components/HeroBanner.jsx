
import Logo from "../assets/logo-extendido.jpg";


const HeroBanner = () => {
  return (
    <div className="flex flex-col items-center py-12 px-4"> 
      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square">
        <div className="absolute inset-0 bg-pink-400 z-0 top-3 left-3 w-full h-full rounded-lg"></div>
        <img
          src={Logo} 
          alt="Sweet Lemon"
          className="absolute inset-0 w-full h-full object-cover z-10 rounded-lg shadow-xl cursor-pointer"
        />
      </div>

      <div className="mt-8 text-center">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl italic font-serif">
          Sweet Lemon: Comida Creativa y con Amor
        </h1>
      </div>
    </div>
  );
}

export default HeroBanner;
