import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
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
