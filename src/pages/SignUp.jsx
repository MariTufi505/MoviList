import React from 'react'
import ButtonGrey from '../components/ButtonGrey';

const SignUp = () => {
  return (
    <>
      <p className="pt-5 text-center text-4xl text-white">Crear Cuenta</p>

      <div className=" grid grid-cols-1 m-auto text-center p-5">
        <label htmlFor="email" className="text-white text-xl">
          Email
        </label>
        <input
          required
          method="POST"
          type="email"
          placeholder="Escribe aquí tu mail"
          className="bg-gray-800 border  text-white border-white w-2/4 p-7 m-auto h-1/2 rounded-3xl"
        ></input>
        <label htmlFor="password" className="text-white">
          Constraseña
        </label>
        <input
          required
          type="password"
          placeholder="Y la contraseña..."
          className="bg-gray-800 border text-white border-white w-2/4 p-7 m-auto  h-1/2 rounded-3xl"
        ></input>
      </div>

      <div className="flex justify-center">
        <ButtonGrey>
          <a href="/">Confirmar</a>
        </ButtonGrey>
        <ButtonGrey>
          <a href="/">Volver</a>
        </ButtonGrey>
      </div>
      <a
        href="/SignIn"
        className="flex justify-center text-xl pb-6 pt-5 text-white"
      >
        ¿Tienes una cuenta? Inicia Sesión
      </a>
    </>
  );
}

export default SignUp