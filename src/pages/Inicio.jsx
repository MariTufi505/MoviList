
import ReviewCard from "../components/ReviewCard"
import Navbar from "../components/Navbar"
import HeroBanner from "../components/HeroBanner"


const Inicio = () => {
  return (
    <div className="bg-black bg-linear-to-t from-gray-900 to-black">
      <Navbar />
      <HeroBanner />
      <ReviewCard />
    </div>
  );
}

export default Inicio