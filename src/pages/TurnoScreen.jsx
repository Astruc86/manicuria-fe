import React, { memo, useEffect } from "react";
import StepperComponent from "../components/stepper/Stepper";
import ServicioList from "../components/servicioItem/ServicioItem";
import ProfesionalList from "../components/profesionalList/ProfesionalList";
import Calendar from "../components/calendar/Calendar";
import HorarioList from "../components/horaSeleccion/HorarioList";
import Resumen from "../components/resumen/Resumen";
import ResumenFinal from "../components/resumen/ResumenFinal";
import "../styles/turnoScreen.css";
import {
  useActiveStep,
  useSeleccionServicio,
  useProfesionalSeleccionado,
  useSeleccionHorario,
  useSeleccionDia,
  useEsPrimerProfesional,
} from "../context/StepperContext";
import MensajeConfirmacionTurno from "../components/mensajeConfirmacionTurno/MensajeConfirmacionTurno";
import Box from "@mui/material/Box";
import { useTurno } from "../hooks/useTurno";
import CircularIndeterminate from "../components/Progress/CircularIndeterminate";

const TurnoScreen = memo(() => {
  const steps = ["Servicio", "Profesional", "Día", "Hora", "Finalizar"];
  const { activeStep, setActiveStep } = useActiveStep();
  const { seleccionServicio } = useSeleccionServicio();
  const { profesionalSeleccionado, setProfesionalSeleccionado } =
    useProfesionalSeleccionado();
  const { seleccionHorario, setSeleccionHorario } = useSeleccionHorario();
  const { seleccionDia, setSeleccionDia } = useSeleccionDia();

  const { esPrimerProfesional, setEsPrimerProfesional } =
    useEsPrimerProfesional();
  const { isError, isLoading, limpiarTurnoScreen, isSuccess } = useTurno();

  const stepStateMap = {
    1: setProfesionalSeleccionado,
    2: setSeleccionDia,
    3: setSeleccionHorario,
  };

  const clearFutureSteps = (step) => {
    Object.keys(stepStateMap).forEach((key) => {
      if (step < key) {
        stepStateMap[key](null);
      }
    });
  };

  const clearPastStep = (step) => {
    if (step === 3 && esPrimerProfesional) {
      setProfesionalSeleccionado({ id: 0 });
    }
    if (step === 1 && esPrimerProfesional) {
      setEsPrimerProfesional(false);
    }
  };

  const handleNext = () => {
    clearFutureSteps(activeStep);
    if (activeStep < steps.length - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    clearPastStep(activeStep);
    if (activeStep > 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  useEffect(() => {
    return () => {
      limpiarTurnoScreen();
    };
  }, []);

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <ServicioList />;
      case 1:
        return <ProfesionalList />;
      case 2:
        return <Calendar />;
      case 3:
        return <HorarioList />;
      case 4:
        return <ResumenFinal />;
      default:
        return null;
    }
  };

  return (
    <>
      {!isError && !isLoading && !isSuccess && (
        <div
          className={`turno-screen ${
            [1, 2, 3].includes(activeStep) ? "split-layout" : ""
          }`}
        >
          <div className="content">
            <StepperComponent
              steps={steps}
              activeStep={activeStep}
              handleNext={handleNext}
              handleBack={handleBack}
              getStepContent={getStepContent}
              seleccionServicio={seleccionServicio}
              profesionalSeleccionado={profesionalSeleccionado}
              seleccionHorario={seleccionHorario}
              seleccionDia={seleccionDia}
            />
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
