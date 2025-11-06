
const User = () => {
  return (
    <>
    <div className='text-white'>
      <div className="flex mt-10 ml-9">
      <p>Logo</p>
      <p>Nombre</p>

      </div>
    <div className="bg-black border border-white p-4 m-9 rounded-3xl">
      <p>Usuario:</p>
      <p>Email:</p>
      <p>Películas Vistas:</p>
      <div className="mt-7"> 
      <button>Cambiar Datos</button>
      <button>Volver</button>

      </div>
    </div>
    </div>
    </>
  )
}

export default User