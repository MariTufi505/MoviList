import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../pages/HomePage";
import SignIn from "../pages/SignIn";
import Search from '../pages/Search'
import Review from "../pages/Review";
import Selectedmovie from "../pages/SelectedMovie";
import SignUp from "../pages/SignUp";
import VerifyMail from "../pages/VerifyMail";
import SendMail from "../pages/SendMail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="SignIn" element={<SignIn />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="VerifyMail" element={<VerifyMail />} />
        <Route path="SenMail" element={<SendMail />} />
        <Route path="Selectedmovie" element={<Selectedmovie />} />
        <Route path="Search" element={<Search />} />
        <Route path="Review" element={<Review />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
