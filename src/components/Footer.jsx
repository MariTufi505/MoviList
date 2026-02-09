

const Footer = () => {
  return (
    <div className=" bg-amber-300 flex flex-col justify-center items-center border border-black">
     <div className="flex justify-between w-1/2 m-10 grid-cols-2 gap-30">
        <section>
          <p className="text-2xl">Tecnologías Utilizadas</p>
            <p>Vite, TailwindCSs, REact JS</p>
        </section>
        <section>
        <p className="text-xl italic">Sobre MoviList</p>
        <p>Es una aplicación web creada para hacer listas de películas vistas, agregar puntuación y darles una reseña. Utiliza TMDB para recopilar la información requeridas de películas.</p>
        </section>
        
     </div>
     <div>
      <p className="text-black">© 2024 MoviList. Todos los derechos reservados.</p>
     </div>
    </div>
  );
}

export default Footer