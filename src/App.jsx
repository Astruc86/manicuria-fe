import React, { Suspense, lazy } from "react";
import { Navigate, Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/footer/Footer";
import "./index.css";
import { StepperProvider } from "./context/StepperContext";
import { TurnosProvider } from "./context/TurnosContext";

import Layout from "./components/navbar/Layout";
import { UsuarioProvider } from "./context/UsuarioContext";
import CircularIndeterminate from "./components/Progress/CircularIndeterminate";

const HomeScreen = lazy(() => import("./pages/HomeScreen"));
const TurnoScreen = lazy(() => import("./pages/TurnoScreen"));
const ContactoScreen = lazy(() => import("./pages/ContactoScreen"));
const IniciarSesionScreen = lazy(() => import("./pages/IniciarSesionScreen"));
const MisTurnosScreen = lazy(() => import("./pages/MisTurnosScreen"));
const AgendaScreen = lazy(() => import("./pages/AgendaScreen"));

export const App = () => {
  const location = useLocation();
  const mostrarFooter = location.pathname === "/turno";

  return (
    <>
      <UsuarioProvider>
        <Layout />
        <StepperProvider>
          <TurnosProvider>
            {/* TODO: container */}
            <Suspense fallback={<CircularIndeterminate />}>
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
            </Suspense>
          </TurnosProvider>
        </StepperProvider>
      </UsuarioProvider>
      {!mostrarFooter && <Footer />}
    </>
  );
};
