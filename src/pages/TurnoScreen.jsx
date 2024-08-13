import React, { memo, useEffect, useState } from "react";
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
  const [showConfirmacion, setShowConfirmacion] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    return () => {
      limpiarTurnoScreen();
    };
  }, []);

  useEffect(() => {
    if (isLoading) {
      setShowLoading(true);
    } else if (isSuccess || isError) {
      setShowLoading(false);
      setShowConfirmacion(true);
    }
  }, [isLoading, isSuccess, isError]);

  return (
    <>
      {showLoading && <CircularIndeterminate />}
      {showConfirmacion && (
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

      {!isError && !showLoading && !showConfirmacion && (
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
    </>
  );
});

export default TurnoScreen;
