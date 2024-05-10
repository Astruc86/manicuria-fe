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
  getStepContent,
}) => {
  return (
    <>
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
            Volver
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

export default StepperComponent;
