import { NavLink } from "react-router-dom"
import "./navbar.css"


export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
                <div className="container-fluid">
                    <NavLink to="/home" className="navbar-brand" href="#">Manicuria</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <NavLink to="/turno" className="nav-link" href="#">Turno</NavLink>
                            <NavLink to="/contacto" className="nav-link" href="#">Contacto</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
/*Linea 8 saque el A y le puse el navlink NOSE SI ES TROLL */