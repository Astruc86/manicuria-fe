import { NavLink } from "react-router-dom";
import "./navbar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
export const NavbarInicioSesion = () => {
  return (
    <nav className="navbar navbar-expand-lg position-absolute w-100 " style={{zIndex:2}} >
      <div className="container-fluid">
        <div className=" navbar-nav   ">
          <NavLink to="/home" className="nav-link">
            <ArrowBackIcon sx={{ fontSize: 30, width: 30, height: 30 }} />
          </NavLink>
        </div>
        {/* <NavLink
          to="/home"
          className="navbar-brand position-absolute top-50 start-50 translate-middle "
         
        >
          Manicuría
        </NavLink> */}
      </div>
    </nav>
    // <></>
  );
};
