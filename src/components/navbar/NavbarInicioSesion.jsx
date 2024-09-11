import { NavLink } from "react-router-dom";
import "./navbar.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
export const NavbarInicioSesion = () => {
  return (
    <nav className="navbar navbar-expand-lg position-absolute w-100 inicio-sesion ">
      <div className="container-fluid">
        <div className=" navbar-nav   ">
          <NavLink to="/home" className="nav-link">
            <ArrowBackIcon sx={{ fontSize: 30, width: 30, height: 30 }} />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};