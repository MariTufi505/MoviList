import React from 'react'
import ButtonGrey from "../components/ButtonGrey"

const MailSent = () => {
  return (
  
    <>
      <p className="pt-5 text-center text-4xl text-white">
       Un correo electrónico ha sido enviado para restablecer la contraseña. <br /> Revisa el casillero de tu mail para continuar.
      </p>
      
      <div className="flex justify-center p-5">
        <ButtonGrey>
          <a href="/">Volver</a>
        </ButtonGrey>
      </div>
      
    </>
  );
}


export default MailSent