
import Buscar from '../pages/Buscar'
import Ingresar from '../pages/Ingresar'

const Navbar = () => {
  return (
     <div className="flex justify-between items-end h-12 bg-black border-2 p-2">
      <>
        <p className="text-white">Buscar</p>
        <p className="text-white">MoviList</p>
        <p className="text-white">Ingresar</p>
      </>
    </div>
      
  )
}

export default Navbar