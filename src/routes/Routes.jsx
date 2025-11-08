
import Ingresar from '../pages/SignUp';
import Buscar from '../pages/Search';
import { Route } from 'react-router-dom';
import Layout from '../components/Layout';
import HomePage from '../pages/HomePage';

const Routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route index element={<HomePage />} />
      <Route path="/Buscar" element={<Buscar />} />
      <Route path="/Ingresar" element={<Ingresar />} />
    </Routes>
  );
}

export default Routes