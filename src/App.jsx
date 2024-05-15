import { Navigate, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { ContactoScreen } from "./pages/ContactoScreen";
import { HomeScreen } from "./pages/HomeScreen";
import TurnoScreen from "./pages/TurnoScreen";
import Footer from "./components/footer/Footer";
import "./index.css";
import { AppProvider } from "./context/TurnoContext";

export const App = () => {
  const location = useLocation();

  const mostrarFooter =
    location.pathname === "/home" || location.pathname === "/contacto";

  return (
    <div className="app-container">
      <Navbar></Navbar>
      <AppProvider>
        <div className="container">
          <Routes>
            <Route path="/home" element={<HomeScreen></HomeScreen>}></Route>
            <Route path="/turno" element={<TurnoScreen></TurnoScreen>}></Route>
            <Route
              path="/contacto"
              element={<ContactoScreen></ContactoScreen>}
            ></Route>
            <Route path="/*" element={<Navigate to="/home"></Navigate>}></Route>
          </Routes>
        </div>
      </AppProvider>
      {mostrarFooter && <Footer />}
    </div>
  );
};
