import { Navigate, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { ContactoScreen } from "./pages/ContactoScreen";
import { HomeScreen } from "./pages/HomeScreen";
import TurnoScreen from "./pages/TurnoScreen";
import Footer from "./components/footer/Footer";
import "./index.css";
import { StepperProvider } from "./context/StepperContext";

export const App = () => {
  const location = useLocation();

  const mostrarFooter =
    location.pathname === "/home" || location.pathname === "/contacto";

  return (
    <div className="app-container">
      <Navbar />
      <StepperProvider>
        <div className="container">
          <Routes>
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/turno" element={<TurnoScreen />} />
            <Route path="/contacto" element={<ContactoScreen />} />
            <Route path="/*" element={<Navigate to="/home" />} />
          </Routes>
        </div>
      </StepperProvider>
      {mostrarFooter && <Footer />}
    </div>
  );
};
