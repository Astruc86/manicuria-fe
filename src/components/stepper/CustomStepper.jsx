import { Stepper, Step, StepLabel } from "@mui/material";
import "./custom-stepper.css";

export function CustomStepper({ activeStep, steps }) {
  return (
    <Stepper activeStep={activeStep} alternativeLabel>
      {steps?.map((label, index) => (
        <Step key={index}>
          <StepLabel
            className="custom-step-label"
            active={activeStep === index}
            completed={activeStep > index}
          >
            {label}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}
