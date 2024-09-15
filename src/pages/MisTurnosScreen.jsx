import { Box, Button } from "@mui/material";
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
            <h3>No hay turnos reservados</h3>
          )}
          {turnos.length > 0 && <TurnosList turnos={turnos} />}
        </>
      ) : (
        <div>
          <Box className="mensaje-sesion">
            <h3>Para ver tus turnos inicia sesión</h3>

            <Stack spacing={3} sx={{ padding: 5 }}>
              <BotonPrimario
                tipo="ingresar"
                onClick={handleNavegarInicioSesion}
              />
            </Stack>
          </Box>
        </div>
      )}
    </div>
  );
};

export default MisTurnosScreen;
