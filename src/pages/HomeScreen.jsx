import { Link } from "react-router-dom";
import Carrusel from "../components/Carrusel/Carrusel";
import { BotonPrimario } from "../components/botones/BotonPrimario";
import "../styles/homeScreen.css";
import { useUsuario } from "../hooks/useUsuario";

const HomeScreen = () => {
  const { rol } = useUsuario();
  return (
    <div className="container-home">
      <Carrusel />

      <section className="container servicios">
        <h1>Servicios</h1>
        <div className="servicios-grid">
          <aside className="servicio">
            <img src="/img/servicios_cuidado.svg" alt="Uña saludable" />
            <h2>Cuidado de uñas</h2>
            <p>
              Corte, limado, limpieza y aplicación de aceites nutritivos para un
              acabado impecable.
            </p>
          </aside>
          <aside className="servicio">
            <img src="/img/servicios_manicuria.svg" alt="Uña pintada" />
            <h2>Manicuría</h2>
            <p>
              Desde estilos clásicos hasta los más creativos, hacemos que tus
              uñas sean una obra de arte.
            </p>
          </aside>
          <aside className="servicio">
            <img
              src="/img/servicios_pedicuria.svg"
              alt="Pie recibiendo cuidados"
            />
            <h2>Pedicuría</h2>
            <p>
              Nuestro servicio de pedicuria incluye exfoliación, masaje y
              esmaltado, dejando tus pies suaves y bellos.
            </p>
          </aside>
        </div>
        {rol !== 1 && (
          <Link to="/turno" className="btn-reservar">
            <BotonPrimario tipo="reservar" />
          </Link>
        )}
      </section>
    </div>
  );
};

export default HomeScreen;
