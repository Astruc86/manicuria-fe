import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { BotonPrimario } from "../botones/BotonPrimario";
import "./mensajeConfirmacionTurno.css";

const MensajeConfirmacionTurno = ({ isSuccess }) => {
  const navigate = useNavigate();

  const handleMisTurnos = () => {
    navigate("/turnos");
  };

  const handleTurno = () => {
    navigate("/home");
  };

  const titulo = isSuccess
    ? "Su turno ha sido creado con éxito."
    : "No se pudo crear su turno.";

  const mensaje = isSuccess
    ? "Puede ver los detalles de sus turnos haciendo clic aquí."
    : "Hubo un error al confirmar su turno. Por favor, inténtelo de nuevo más tarde.";

  const icono = isSuccess ? (
    <img src="/img/msj_exito.svg" alt="Gato con corazones" />
  ) : (
    <img src="/img/msj_error.svg" alt="Gato llorando" />
  );

  const boton = isSuccess ? (
    <BotonPrimario tipo="misTurnos" onClick={handleMisTurnos} />
  ) : (
    <BotonPrimario tipo="volver" onClick={handleTurno} />
  );
  return (
    <Box className="mensaje-confirmacion ">
      <Stack spacing={3} sx={{ padding: 5 }}>
        {icono}
        <h3>{titulo}</h3>
        <p>{mensaje}</p>
        {boton}
      </Stack>
    </Box>
  );
};

export default MensajeConfirmacionTurno;
