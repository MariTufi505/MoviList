import Listado from "./Listado"
import ListAgregar from "./ListAgregar"


const List = () => {
  return (
    <div>
        <p className="text-white mt-4 ml-2 p-2 text-2xl">Últimas Vistas</p>
        <div className="flex justify-center">
        <hr className="border-t border-white w-80 flex"/>
        </div>
        <Listado />
        <ListAgregar />

    </div>
  )
}

export default List