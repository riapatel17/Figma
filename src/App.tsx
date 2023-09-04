import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Menu } from "./pages/Menu";
import { Reward } from "./pages/Rewards";
import { Deal } from "./pages/Deals";
import { Brands } from "./pages/Brands";
import { Footer } from "./components/Footer/Footer";
import AllRoutes from "./components/Routes/Navigation";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {AllRoutes.map((r) => (
            <Route path={r.path} element={r.element} />
          ))}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
