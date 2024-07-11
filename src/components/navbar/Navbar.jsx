import { NavLink } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
            <div className="container-fluid">
                <NavLink to="/home" className="navbar-brand">
                    Manicuría
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <NavLink to="/turno" className="nav-link">
                            Turno
                        </NavLink>
                        <NavLink to="/contacto" className="nav-link">
                            Contacto
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};