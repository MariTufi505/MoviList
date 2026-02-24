
import { useState } from "react";
import HeroBanner from "../components/HeroBanner";
import Card from "../components/Card";




const HomePage = () => {

  const [reseñas, setReseñas] = useState([]);

  const agregarReseña = (nuevaReseña) => {
    setReseñas((prev) => [...prev, nuevaReseña]);
  };

  return (
    <>
      <HeroBanner onAgregarReseña={agregarReseña} />
      <Card reseñas={reseñas}/>
    </>
  );
}

export default HomePage