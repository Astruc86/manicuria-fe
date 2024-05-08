import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import ServicioList from "../components/servicioItem/ServicioItem";
import ProfesionalList from "../components/profesionalList/ProfesionalList";
import Button from "@mui/material/Button";

export const TurnoScreen = () => {
  const steps = ["Servicio", "Profesional", "Día", "Hora","Finalizar"]; // Define los pasos del stepper
  const [activeStep, setActiveStep] = React.useState(0);

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
        return <p>Confirmar y enviar el turno</p>;
      default:
        return <p>Error: Paso desconocido</p>;
    }
  };

  return (
    <>
      <h1>TurnoScreen</h1>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {getStepContent(activeStep)}
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            Atras
          </Button>
          <Button
            disabled={activeStep === steps.length - 1}
            onClick={handleNext}
          >
            Siguiente
          </Button>
        </Box>
      </div>
    </>
  );
};
