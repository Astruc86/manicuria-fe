import { Box } from "@mui/material";
import CircularIndeterminate from "../components/Progress/CircularIndeterminate";
import { TurnosList } from "../components/turnosList/TurnosList";
import { useMisTurnos } from "../hooks/useMisTurnos";
import { Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/misTurnosScreen.css";
import { BotonPrimario } from "../components/botones/BotonPrimario";
import { useUsuario } from "../hooks/useUsuario";

const MisTurnosScreen = () => {
  const { turnos, isLoading, isError } = useMisTurnos();
  const { rol } = useUsuario();

  const navigate = useNavigate();

  const handleNavegarInicioSesion = () => {
    navigate("/inicio-sesion");
  };

  const handleNavegaTurnos = () => {
    navigate("/turno");
  };

  return (
    <>
      {rol == 2 ? (
        <div className="container">
          {isLoading && <CircularIndeterminate />}
          {isError && (
            <h3>
              Error cargando los turnos. Por favor, intente de nuevo más tarde.
            </h3>
          )}
          {!isError && !isLoading && turnos.length === 0 && (
            <div className="container mis-turnos">
              <Box className="mensaje-reservar-turnos">
                <Stack>
                  <h4>
                    Aún no tienes turnos reservados. ¡Reserva tu primer turno!
                  </h4>
                  <BotonPrimario tipo="reservar" onClick={handleNavegaTurnos} />
                </Stack>
              </Box>
            </div>
          )}
          {turnos.length > 0 && <TurnosList turnos={turnos} />}
        </div>
      ) : (
        <div className="container mis-turnos">
          <Box className="mensaje-iniciar-sesion">
            <Stack>
              <h4>Para ver tus turnos debes iniciar sesión</h4>
              <BotonPrimario
                tipo="ingresar"
                onClick={handleNavegarInicioSesion}
              />
            </Stack>
          </Box>
        </div>
      )}
    </>
  );
};

export default MisTurnosScreen;
