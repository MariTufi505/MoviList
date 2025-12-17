import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../pages/HomePage";
import SignUp from "../pages/SignUp";
import Search from '../pages/Search'
import Selectedmovie from "../pages/SelectedMovie";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="Selectedmovie" element={<Selectedmovie />} />
        <Route path='Search' element={<Search />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
