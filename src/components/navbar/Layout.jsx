import React from "react";
import { useLocation } from "react-router-dom";
import { NavbarCliente } from "./NavbarCliente";
import { NavbarInicioSesion } from "./NavbarInicioSesion";
import { NavbarEmpresa } from "./NavbarEmpresa";
import { useUsuarioContext } from "../../context/UsuarioContext";

const Layout = ({ children }) => {
  const location = useLocation();
  const path = location.pathname;
  const { usuario, setUsuario } = useUsuarioContext();

  let NavbarComponent;
  if (path === "/inicio-sesion") {
    NavbarComponent = NavbarInicioSesion;
  } else if (path === "/empresa") {
    NavbarComponent = NavbarEmpresa;
  } else if (usuario === 1 && path !== "/inicio-sesion") {
    NavbarComponent = NavbarEmpresa;
  } else {
    NavbarComponent = NavbarCliente;
  }

  return (
    <div>
      <NavbarComponent />
      {children}
    </div>
  );
};

export default Layout;
