import { Navigate, Routes, Route, useLocation } from "react-router-dom";
import { NavbarCliente } from "./components/navbar/NavbarCliente";
import { ContactoScreen } from "./pages/ContactoScreen";
import { HomeScreen } from "./pages/HomeScreen";
import TurnoScreen from "./pages/TurnoScreen";
import Footer from "./components/footer/Footer";
import "./index.css";
import { StepperProvider } from "./context/StepperContext";
import { IniciarSesionScreen } from "./pages/IniciarSesionScreen";
import { MisTurnosScreen } from "./pages/MisTurnosScreen";
import Layout from "./components/navbar/Layout";
import { UsuarioProvider } from "./context/UsuarioContext";
import { AgendaScreen } from "./pages/AgendaScreen";
import { TurnoProvider } from "./context/TurnoContext";

export const App = () => {
  const location = useLocation();

  const mostrarFooter = location.pathname === "/turno";

  return (
    <div className="app-container">
      <UsuarioProvider>
        <Layout></Layout>
        <StepperProvider>
          <TurnoProvider>
            <div className="container">
              <Routes>
                <Route path="/home" element={<HomeScreen />} />
                <Route path="/turno" element={<TurnoScreen />} />
                <Route path="/contacto" element={<ContactoScreen />} />
                <Route path="/turnos" element={<MisTurnosScreen />} />
                <Route
                  path="/inicio-sesion"
                  element={<IniciarSesionScreen />}
                />
                <Route path="/agenda" element={<AgendaScreen />} />
                <Route path="/*" element={<Navigate to="/home" />} />
              </Routes>
            </div>
          </TurnoProvider>
        </StepperProvider>
      </UsuarioProvider>
      {!mostrarFooter && <Footer />}
    </div>
  );
};
