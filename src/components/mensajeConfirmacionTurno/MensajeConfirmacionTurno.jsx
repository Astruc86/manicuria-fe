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

  return (
    <>
      <Box sx={{ width: 350, border: "1px solid black", borderRadius: 4 }}>
        <Stack spacing={3} sx={{ padding: 5 }}>
          {estadoTurno === "creado" ? (
            <>
              <CheckCircleIcon sx={{ fontSize: 60 }} color="success" />
              <h3>Su turno ha sido creado con éxito.</h3>
              <p>Puede ver los detalles de sus turnos haciendo clic aquí.</p>
              <Button variant="contained" onClick={handleMisTurnos}>
                MIS TURNOS
              </Button>
            </>
          ) : (
            <>
              <UnpublishedIcon sx={{ fontSize: 60 }} color="error" />
              <h3>No se pudo crear su turno.</h3>
              <p>
                Hubo un error al confirmar su turno. Por favor, inténtelo de
                nuevo más tarde.
              </p>
            </>
          )}
        </Stack>
      </Box>
    </>
  );
};

export default MensajeConfirmacionTurno;
