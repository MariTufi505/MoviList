import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-around h-12 bg-black border-2 px-8 py-2">
        <>
          <a target="_blank" href="/Search" className="text-white px-3 cursor-pointer">Buscar</a>
          <a target="_self" href="/" className="text-yellow-300 px-3 cursor-pointer">MoviList</a>
          <a target="_self" href="/Signup" className="text-white px-3 cursor-pointer">Ingresar</a>
        </>
      </div>
      <hr className=" border-white" />
    </>
  );
}

export default Navbar