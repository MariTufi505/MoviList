import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-end h-12 bg-black border-2 px-8 py-2">
        <>
          <Link to={"../pages/Buscar.jsx"} className="text-white cursor-pointer">Buscar</Link>
          <Link to={"../pages/Inicio.jsx"} className="text-yellow-300 cursor-pointer">MoviList</Link>
          <Link to={"../pages/Ingresar.jsx"} className="text-white cursor-pointer">Ingresar</Link>
        </>
      </div>
      <hr className=" border-white" />
    </>
  );
}

export default Navbar