
import Ingresar from '../pages/SignUp';
import Inicio from '../pages/HomePage';
import Buscar from '../pages/Search';
import { Route } from 'react-router-dom';
import Layout from '../components/Layout';

const Routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route index element={<Inicio />} />
      <Route path="/Buscar" element={<Buscar />} />
      <Route path="/Ingresar" element={<Ingresar />} />
    </Routes>
  );
}

export default Routes