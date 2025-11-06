import PeliculasAgregadas from "./PeliculasAgregadas"


const ListAgregar = () => {
  return (
    <div>
      <p className="text-white m-10 font-light text-4xl"> ¿Que pelicula quieres agregar?</p>
      <hr className="border-t border-white flex justify-center m-2 text-" />
      <PeliculasAgregadas />
    </div>
  );
}

export default ListAgregar