import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Search from "./pages/Search";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="buscar" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
