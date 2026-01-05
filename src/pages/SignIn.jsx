import ButtonGrey from "../components/ButtonGrey"


const SignIn = () => {
  return (
    <>
      <p className="pt-5 text-center text-4xl text-white">
        Ingresa con tu EMAIL
      </p>
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
        <ButtonGrey>Ingresar</ButtonGrey>
        <ButtonGrey>
          <a href="/">Volver</a>
        </ButtonGrey>
      </div>
      <a href="/SendMail" className="flex justify-center text-xl text-white">
        ¿Has olvidado la contraseña?
      </a>
      <a href="/SignUp" className="flex justify-center text-xl text-white">
        Crear Cuenta
      </a>
    </>
  );
}

export default SignIn