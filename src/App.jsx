import { Navigate, Routes, Route, useLocation } from "react-router-dom";
import { NavbarCliente } from "./components/navbar/NavbarCliente";
import { ContactoScreen } from "./pages/ContactoScreen";
import { HomeScreen } from "./pages/HomeScreen";
import TurnoScreen from "./pages/TurnoScreen";
import Footer from "./components/footer/Footer";
import "./index.css";
import { StepperProvider } from "./context/StepperContext";
import { InicioSesionScreen } from "./pages/InicioSesionScreen";
import { MisTurnosScreen } from "./pages/MisTurnosScreen";
import Layout from "./components/navbar/Layout";

export const App = () => {
  const location = useLocation();

  const mostrarFooter =
    location.pathname === "/turno";

  return (
    <div className="app-container">
      <Layout></Layout>
      <StepperProvider>
        <div className="container">
          <Routes>
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/turno" element={<TurnoScreen />} />
            <Route path="/contacto" element={<ContactoScreen />} />
            <Route path="/turnos" element={<MisTurnosScreen />} />
            <Route path="/inicio-sesion" element={<InicioSesionScreen />} />
            <Route path="/*" element={<Navigate to="/home" />} />
          </Routes>
        </div>
      </StepperProvider>
      {!mostrarFooter && <Footer />}
    </div>
  );
};
