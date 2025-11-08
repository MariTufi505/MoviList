
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-linear-to-b from-black to-gray-900">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
