import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { useLimpiarStepper } from "../../context/StepperContext";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import UnpublishedIcon from "@mui/icons-material/Unpublished";

const MensajeConfirmacionTurno = ({ estadoTurno }) => {
  const navigate = useNavigate();
  const { limpiarStepper } = useLimpiarStepper();

  useEffect(() => {
    return () => {
      limpiarStepper();
    };
  }, []);

  const handleMisTurnos = () => {
    navigate("/turnos");
  };

  const titulo =
    estadoTurno === "creado"
      ? "Su turno ha sido creado con éxito."
      : "No se pudo crear su turno.";

  const mensaje =
    estadoTurno === "creado"
      ? "Puede ver los detalles de sus turnos haciendo clic aquí."
      : "Hubo un error al confirmar su turno. Por favor, inténtelo de nuevo más tarde.";

  const icono =
    estadoTurno === "creado" ? (
      <CheckCircleIcon sx={{ fontSize: 60 }} color="success" />
    ) : (
      <UnpublishedIcon sx={{ fontSize: 60 }} color="error" />
    );

  const boton = estadoTurno === "creado" && (
    <Button variant="contained" onClick={handleMisTurnos}>
      MIS TURNOS
    </Button>
  );

  return (
    <>
      <Box sx={{ width: 350, border: "1px solid black", borderRadius: 4 }}>
        <Stack spacing={3} sx={{ padding: 5 }}>
          {icono}
          <h3>{titulo}</h3>
          <p>{mensaje}</p>
          {boton}
        </Stack>
      </Box>
    </>
  );
};

export default MensajeConfirmacionTurno;
