import React from 'react'
import ButtonGrey from '../components/ButtonGrey';

const Ingresar = () => {
  return (
    <>
      <p className="pt-5 text-center text-4xl">Ingresar</p>
      <div className="bg-black border border-white w-auto p-4 m-9 h-1/2 rounded-3xl">
        <input type="email" placeholder="Escribe tu mail..."></input>
      </div>
      <div className="bg-black border border-white w-auto p-4 m-9 h-1/2 rounded-3xl ">
        <input type="password" placeholder="Y la contraseña..."></input>
      </div>
      <div className="flex justify-center">
        <ButtonGrey>Ingresar</ButtonGrey>
        <ButtonGrey>Volver</ButtonGrey>
      </div>
      <a href="" className="flex justify-center text-xl pb-6 pt-10">
        ¿Has olvidado la contraseña?
      </a>
    </>
  );
}

export default Ingresar