import React, { memo, useEffect } from "react";
import StepperComponent from "../components/stepper/Stepper";
import Resumen from "../components/resumen/Resumen";
import "../styles/turnoScreen.css";
import { useActiveStep } from "../context/StepperContext";
import MensajeConfirmacionTurno from "../components/mensajeConfirmacionTurno/MensajeConfirmacionTurno";
import Box from "@mui/material/Box";
import { useTurno } from "../hooks/useTurno";
import CircularIndeterminate from "../components/Progress/CircularIndeterminate";

const TurnoScreen = memo(() => {
  const { activeStep } = useActiveStep();
  const { isError, isLoading, limpiarTurnoScreen, isSuccess } = useTurno();

  useEffect(() => {
    return () => {
      limpiarTurnoScreen();
    };
  }, []);

  return (
    <>
      {!isError && !isLoading && !isSuccess && (
        <div
          className={`turno-screen ${
            [1, 2, 3].includes(activeStep) ? "split-layout" : ""
          }`}
        >
          <div className="content">
            <StepperComponent activeStep={activeStep} />
          </div>
          {[1, 2, 3].includes(activeStep) && (
            <div className="resumen-container">
              <Resumen />
            </div>
          )}
        </div>
      )}

      {isLoading && <CircularIndeterminate />}
      {(isSuccess || isError) && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MensajeConfirmacionTurno isSuccess={isSuccess} />
        </Box>
      )}
    </>
  );
});

export default TurnoScreen;
