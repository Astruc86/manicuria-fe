import { Box } from "@mui/material";
import CircularIndeterminate from "../components/Progress/CircularIndeterminate";
import { TurnosList } from "../components/turnosList/TurnosList";
import { useUsuarioContext } from "../context/UsuarioContext";
import { useMisTurnos } from "../hooks/useMisTurnos";
import { Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/misTurnosScreen.css";
import { BotonPrimario } from "../components/botones/BotonPrimario";

const MisTurnosScreen = () => {
  const { turnos, isLoading, isError } = useMisTurnos();
  //TODO cuando se pushee la rama MIA-101 traer del useUsuarioContext el rol
  const { usuario } = useUsuarioContext();

  const navigate = useNavigate();

  const handleNavegarInicioSesion = () => {
    navigate("/inicio-sesion");
  };

  const handleNavegaTurnos = () => {
    navigate("/turno");
  };

  return (
    <div className="container mis-turnos">
      {usuario == 2 ? (
        <>
          {isLoading && <CircularIndeterminate />}
          {isError && (
            <h3>
              Error cargando los turnos. Por favor, intente de nuevo más tarde.
            </h3>
          )}
          {!isError && !isLoading && turnos.length === 0 && (
            <>
              <Box className="mensaje-reservar-turnos">
                <Stack>
                  <h4>
                    Aún no tienes turnos reservados. ¡Reserva tu primer turno!
                  </h4>
                  <BotonPrimario tipo="reservar" onClick={handleNavegaTurnos} />
                </Stack>
              </Box>
            </>
          )}
          {turnos.length > 0 && <TurnosList turnos={turnos} />}
        </>
      ) : (
        <Box className="mensaje-iniciar-sesion">
          <Stack>
            <h4>Para ver tus turnos debes iniciar sesión</h4>
            <BotonPrimario
              tipo="ingresar"
              onClick={handleNavegarInicioSesion}
            />
          </Stack>
        </Box>
      )}
    </div>
  );
};

export default MisTurnosScreen;
