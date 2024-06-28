import React, { memo } from "react";
import StepperComponent from "../components/stepper/Stepper";
import ServicioItem from "../components/servicioItem/ServicioItem";
import ProfesionalList from "../components/profesionalList/ProfesionalList";
import {
  useActiveStep,
  useSeleccionServicio,
  useProfesionalSeleccionado,
} from "../context/StepperContext";

const TurnoScreen = memo(() => {
  const steps = ["Servicio", "Profesional", "Día", "Hora", "Finalizar"];
  const { activeStep, setActiveStep } = useActiveStep();
  const { seleccionServicio, setSeleccionServicio } = useSeleccionServicio();
  const { profesionalSeleccionado, setProfesionalSeleccionado } =
    useProfesionalSeleccionado();

  const clearFutureSteps = (step) => {
    if (step < 1) {
      setProfesionalSeleccionado(null);
    }
    //Para agregar mas limpieza de estados
  };

  const handleNext = () => {
    clearFutureSteps(activeStep);
    if (activeStep < steps.length - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <ServicioItem setSeleccion={setSeleccionServicio} />;
      case 1:
        return <ProfesionalList setSeleccion={setProfesionalSeleccionado} />;
      case 2:
        return <p>Calendario de selección de Día</p>;
      case 3:
        return <p>Selección de Hora</p>;
      default:
        return <p>Resumen Final</p>;
    }
  };

  return (
    <>
      <h1>TurnoScreen</h1>
      <StepperComponent
        steps={steps}
        activeStep={activeStep}
        handleNext={handleNext}
        handleBack={handleBack}
        getStepContent={getStepContent}
        seleccionServicio={seleccionServicio}
        profesionalSeleccionado={profesionalSeleccionado}
      />
    </>
  );
});

export default TurnoScreen;
