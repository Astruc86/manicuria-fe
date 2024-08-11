import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Box from "@mui/material/Box";
import ConfirmarTurnoModal from "../confirmarTurnoModal/ConfirmarTurnoModal";
import * as React from "react";
import useModal from "../../hooks/useModal";
import ServicioList from "../servicioItem/ServicioItem";
import ProfesionalList from "../profesionalList/ProfesionalList";
import Calendar from "../calendar/Calendar";
import HorarioList from "../horaSeleccion/HorarioList";
import ResumenFinal from "../resumen/ResumenFinal";
import { BotonSiguiente } from "../botones/BotonSiguiente";
import { BotonVolver } from "../botones/BotonVolver";
import { useStepperTurno } from "../../hooks/useStepperTurno";

const StepperComponent = () => {
  const {
    steps,
    activeStep,
    handleNext,
    handleBack,
    isNextButtonDisabled,
    isLastStep,
  } = useStepperTurno();

  const { open, handleOpen, handleClose } = useModal();

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

  const modal = isLastStep && (
    <ConfirmarTurnoModal
      open={open}
      handleClose={handleClose}
    ></ConfirmarTurnoModal>
  );

  return (
    <>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {getStepContent(activeStep)}
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <BotonVolver activeStep={activeStep} handleBack={handleBack} />
          <BotonSiguiente
            isLastStep={isLastStep}
            handleOpen={handleOpen}
            isNextButtonDisabled={isNextButtonDisabled}
            handleNext={handleNext}
          />
          {modal}
        </Box>
      </div>
    </>
  );
};

export default StepperComponent;
