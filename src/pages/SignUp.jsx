import ButtonGrey from "../components/ButtonGrey"


const SignUp = () => {
  return (
    <>
      <p className="pt-5 text-center text-4xl">Ingresar</p>
      <div className="bg-black border border-white w-auto p-4 m-9 h-1/2 rounded-3xl">
        <input
          type="email"
          placeholder="Escribe tu mail..."
          className="text-white"
        ></input>
      </div>
      <div className="bg-black border border-white w-auto p-4 m-9 h-1/2 text-white rounded-3xl ">
        <input type="password" placeholder="Y la contraseña..."></input>
      </div>
      <div className="flex justify-center">
        <ButtonGrey>Ingresar</ButtonGrey>
        <ButtonGrey>
          <a href="/">Volver</a>
        </ButtonGrey>
      </div>
      <a href="" className="flex justify-center text-xl pb-6 pt-10 text-white">
        ¿Has olvidado la contraseña?
      </a>
      <a href="" className="flex justify-center text-xl pb-6 pt-5 text-white">
        Crear Cuenta
      </a>
    </>
  );
}

export default SignUp