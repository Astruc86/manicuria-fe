import React, { memo } from "react";
import StepperComponent from "../components/stepper/Stepper";
import ServicioItem from "../components/servicioItem/ServicioItem";
import ProfesionalList from "../components/profesionalList/ProfesionalList";
import Calendar from "../components/calendar/Calendar"; 
import HorarioList from "../components/horaSeleccion/HorarioList";
import Resumen from "../components/resumen/Resumen";
import "../styles/turnoScreen.css";
import {
  useActiveStep,
  useSeleccionServicio,
  useProfesionalSeleccionado,
  useSeleccionHorario,
  useSeleccionDia,
} from "../context/StepperContext";

const TurnoScreen = memo(() => {
  const steps = ["Servicio", "Profesional", "Día", "Hora", "Finalizar"];
  const { activeStep, setActiveStep } = useActiveStep();
  const { seleccionServicio, setSeleccionServicio } = useSeleccionServicio();
  const { profesionalSeleccionado, setProfesionalSeleccionado } = useProfesionalSeleccionado();
  const { seleccionHorario, setSeleccionHorario } = useSeleccionHorario();
  const { seleccionDia, setSeleccionDia } = useSeleccionDia();

  const stepStateMap = {
    1: setProfesionalSeleccionado,
    2: setSeleccionDia, 
    3: setSeleccionHorario,
  };

  const clearFutureSteps = (step) => {
    Object.keys(stepStateMap).forEach(key => {
      if (step < key) {
        stepStateMap[key](null);
      }
    });
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
        return <Calendar setSeleccion={setSeleccionDia} />; 
      case 3:
        return <HorarioList setSeleccion={setSeleccionHorario} />;
      default:
        return <p>Resumen Final</p>;
    }
  };

  return (
    <div className={`turno-screen ${[1, 2, 3].includes(activeStep) ? 'split-layout' : ''}`}>
      <div className="content">
        <h1>TurnoScreen</h1>
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
  );
});

export default TurnoScreen;