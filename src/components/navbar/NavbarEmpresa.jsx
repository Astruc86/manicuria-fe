import { NavLink } from "react-router-dom";
import "./navbar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const NavbarEmpresa = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
      <div className="container-fluid">
        <NavLink to="/home" className="navbar-brand">
          Manicuría
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <NavLink to="/contacto" className="nav-link ">
              <span className="align-middle">Contacto</span>
            </NavLink>
            <NavLink to="/agenda" className="nav-link ">
              <span className="align-middle">Agenda</span>
            </NavLink>
            <NavLink to="/inicio-sesion" className="nav-link">
              <AccountCircleIcon sx={{ fontSize: 30, width: 30, height: 30 }} />
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
