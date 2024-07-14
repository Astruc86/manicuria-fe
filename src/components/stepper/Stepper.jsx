import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const StepperComponent = ({
  steps,
  activeStep,
  handleNext,
  handleBack,
  handleConfirmar,
  getStepContent,
  seleccionServicio,
  profesionalSeleccionado,
  seleccionHorario,
  seleccionDia,
}) => {
  const isNextButtonDisabled =
    (activeStep === 0 && !seleccionServicio) ||
    (activeStep === 1 && !profesionalSeleccionado) ||
    (activeStep === 2 && !seleccionDia) ||
    (activeStep === 3 && !seleccionHorario);

  const isLastStep = activeStep === steps.length - 1;

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
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            Volver
          </Button>
          {isLastStep ? (
            <Button disabled={isNextButtonDisabled} onClick={handleConfirmar}>
              CONFIRMAR
            </Button>
          ) : (
            <Button disabled={isNextButtonDisabled} onClick={handleNext}>
              SIGUIENTE
            </Button>
          )}
        </Box>
      </div>
    </>
  );
};

export default StepperComponent;
