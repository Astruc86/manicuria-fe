import { useLocation } from "react-router-dom";
import { NavbarCliente } from "./NavbarCliente";
import { NavbarEmpresa } from "./NavbarEmpresa";
import { useUsuario } from "../../hooks/useUsuario";
import { NavbarInicioSesion } from "./NavbarInicioSesion";

const Layout = ({ children }) => {
  const location = useLocation();
  const path = location.pathname;
  const { rol } = useUsuario();

  let NavbarComponent;
  if (path === "/inicio-sesion") {
    NavbarComponent = NavbarInicioSesion;
  } else if (path === "/empresa") {
    NavbarComponent = NavbarEmpresa;
  } else if (rol === 1 && path !== "/inicio-sesion") {
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
