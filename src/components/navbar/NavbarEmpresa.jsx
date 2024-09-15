import { NavLink } from "react-router-dom";
import "./navbar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useEmpresa } from "../../hooks/useEmpresa";

export const NavbarEmpresa = () => {
  const { logo } = useEmpresa();

  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        {logo ? (
          <NavLink to="/home" className="navbar-brand">
            <img src={logo.url} alt={logo.alt} />
          </NavLink>
        ) : (
          "MIA"
        )}
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
