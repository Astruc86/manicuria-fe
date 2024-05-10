import { useState } from "react";
import StepperComponent from "../components/stepper/Stepper";
import ServicioList from "../components/servicioItem/ServicioItem";
import ProfesionalList from "../components/profesionalList/ProfesionalList";

const TurnoScreen = () => {
  const steps = ["Servicio", "Profesional", "Día", "Hora", "Finalizar"];
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <ServicioList />;
      case 1:
        return <ProfesionalList />;
      case 2:
        return <p>Calendario de seleccion de Dia</p>; 
      case 3:
          return <p>Seleccion de Hora</p>;   
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
      />
    </>
  );
};

export default TurnoScreen;
